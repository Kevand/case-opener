import { DreamsAndNightmaresCase } from "./cases/dancase";
import { FeverCase } from "./cases/fevercase";
import { FractureCase } from "./cases/fracturecase";
import { GalleryCase } from "./cases/gallerycase";
import { KilowattCase } from "./cases/kilowattcase";
import "./style.css";
import type { DroppedItem, Item, Rarity } from "./types";

const cases: Record<string, Item[]> = {
  "Gallery Case": GalleryCase,
  "Fever Case": FeverCase,
  "Kilowatt Case": KilowattCase,
  "Dreams and Nightmares Case": DreamsAndNightmaresCase,
  "Fracture Case": FractureCase,
};

function getQuality(float: number) {
  if (float <= 0.07) return "Factory New";
  else if (float <= 0.15) return "Minimal Wear";
  else if (float <= 0.38) return "Field-Tested";
  else if (float <= 0.45) return "Well-Worn";
  else return "Battle-Scarred";
}

const rarityWeights: Record<Rarity, number> = {
  "Mil-Spec": 0,
  Restricted: 0.7992,
  Classified: 0.7992 + 0.1598,
  Covert: 0.7992 + 0.1598 + 0.032,
  "Covert Knife": 0.7992 + 0.1598 + 0.032 + 0.0064,
};

function roll(container: Item[]): DroppedItem {
  const random = Math.random();

  let droppedItemRarity: Rarity = "Mil-Spec";

  if (random > rarityWeights["Covert Knife"])
    droppedItemRarity = "Covert Knife";
  else if (random > rarityWeights["Covert"]) droppedItemRarity = "Covert";
  else if (random > rarityWeights["Classified"])
    droppedItemRarity = "Classified";
  else if (random > rarityWeights["Restricted"])
    droppedItemRarity = "Restricted";

  const rarityItems = container.filter((i) => i.rarity === droppedItemRarity);
  const randomItemFromGroup =
    rarityItems[Math.floor(rarityItems.length * Math.random())];

  let float = Math.random();

  if (randomItemFromGroup.floatCap) {
    const [min, max] = randomItemFromGroup.floatCap;
    float = min + Math.random() * (max - min);
  }

  const droppedItem: DroppedItem = {
    ...randomItemFromGroup,
    stattrack: Math.random() < 0.1,
    float,
  };

  return droppedItem;
}

const resultElement = document.createElement("div");
resultElement.classList.add("result");

const statsElement = document.createElement("div");
statsElement.classList.add("stats");

const navElement = document.createElement("nav");
const caseSelect = document.createElement("select");

const rarityValues: Record<Rarity, number> = {
  "Covert Knife": 0,
  Covert: 1,
  Classified: 2,
  Restricted: 3,
  "Mil-Spec": 4,
};

for (const key of Object.keys(cases)) {
  const o = document.createElement("option");
  o.value = key;
  o.innerText = key;
  caseSelect.append(o);
}

const countInput = document.createElement("input");
countInput.type = "number";
countInput.min = "1";
countInput.value = "1";
countInput.placeholder = "How many to open?";

const caseQueueElement = document.createElement("div");
caseQueueElement.classList.add("case-queue");

const addButton = document.createElement("button");
addButton.innerText = "Add cases to the opening";

const startButton = document.createElement("button");
startButton.innerText = "Start opening";

const toOpen = state<ToOpen[]>([]);

addButton.onclick = () => {
  const current = toOpen.get();

  const count = isNaN(countInput.valueAsNumber) ? 1 : countInput.valueAsNumber;

  current.push({
    id: crypto.randomUUID(),
    case: caseSelect.value,
    count: count < 1 ? 1 : count,
  });

  toOpen.set(current);
};

const infos = [
  "gold gold gold gold gold",
  "gaben pls",
  "fuck this game",
  "yo mama",
];

function rollingAnimation() {
  const w = document.createElement("div");
  w.classList.add("rolling-anim");

  const child = document.createElement("div");
  const progress = document.createElement("div");
  const title = document.createElement("h1");
  const info = document.createElement("h5");

  title.innerText = "Opening Cases....";
  info.innerText = infos[Math.floor(Math.random() * infos.length)];

  child.append(title, progress, info);

  w.append(child);

  document.body.append(w);

  setTimeout(() => {
    w.remove();
    opening();
  }, 5000);
}

function opening() {
  const toopen = toOpen.get();

  const result: DroppedItem[] = [];

  for (const c of toopen) {
    result.push(...openCase(c));
  }

  statsElement.innerHTML = "";
  const s = getStats(result);
  for (const [key, val] of Object.entries(s)) {
    const e = document.createElement("p");
    e.innerText = `${key} - ${val}`;
    statsElement.append(e);
  }

  const moneySpendEl = document.createElement("p");
  moneySpendEl.classList.add("money-spent");
  moneySpendEl.innerText = `YOU JUST SPENT ABOUT ${
    result.length * 2.5
  }£ ON THIS OPENING`;
  statsElement.append(moneySpendEl);

  resultElement.innerHTML = "";

  inventory.set(
    result.sort((a, b) => {
      return rarityValues[a.rarity] - rarityValues[b.rarity];
    })
  );
  toOpen.set([]);
}

startButton.onclick = () => {
  if (toOpen.get().length === 0) {
    alert("ADD CASES TO THE OPENING FIRST");
    return;
  }

  rollingAnimation();
};

toOpen.subscribe(() => {
  caseQueueElement.innerHTML = "";

  for (const t of toOpen.get()) {
    const digits = String(t.count).split("").length;
    const exmarks = new Array(digits).fill("!").join("");

    const e = document.createElement("span");
    e.innerText = `${t.count}${exmarks} ${t.case}s`;
    e.onclick = () => {
      toOpen.set(toOpen.get().filter((f) => f.id !== t.id));
    };
    caseQueueElement.append(e);
  }
});

navElement.append(caseSelect, countInput, addButton, startButton);

function state<T>(initial: T) {
  let value: T = initial;
  const listeners: (() => void)[] = [];

  return {
    set(v: T) {
      value = v;
      listeners.forEach((l) => l());
    },
    get() {
      return value;
    },
    subscribe(fn: () => void) {
      listeners.push(fn);
    },
  };
}

type ToOpen = {
  id: string;
  case: keyof typeof cases;
  count: number;
};

function openCase(caseToOpen: ToOpen) {
  const items: DroppedItem[] = [];
  const container = cases[caseToOpen.case];

  for (let i = 0; i < caseToOpen.count; i++) {
    items.push(roll(container));
  }

  return items;
}

window.onload = () => {
  document.body.append(
    navElement,
    resultElement,
    statsElement,
    caseQueueElement
  );
};

const inventory = state<DroppedItem[]>([]);
inventory.subscribe(() => {
  for (const i of inventory.get()) {
    resultElement.append(createSkinItem(i));
  }
});

function getStats(items: DroppedItem[]) {
  return {
    factoryNews: items.filter((i) => getQuality(i.float) === "Factory New")
      .length,
    minimalWares: items.filter((i) => getQuality(i.float) === "Minimal Wear")
      .length,
    fieldTesteds: items.filter((i) => getQuality(i.float) === "Field-Tested")
      .length,
    wellWorns: items.filter((i) => getQuality(i.float) === "Well-Worn").length,
    battleScareds: items.filter((i) => getQuality(i.float) === "Battle-Scarred")
      .length,
    stattracks: items.filter((i) => i.stattrack).length,
  };
}

function createSkinItem(item: DroppedItem) {
  const wrapper = document.createElement("div");

  const tooltip = document.createElement("span");
  tooltip.classList.add("tooltip");
  tooltip.innerText = `Float: ${item.float}`;

  const img = document.createElement("img");
  img.src = item.imageUrl ?? "";
  img.alt = item.name;

  const infoBox = document.createElement("div");
  infoBox.classList.add(item.rarity.toLowerCase().replaceAll(" ", "-").trim());

  const name = document.createElement("p");
  name.innerText = item.name;

  const quality = document.createElement("p");
  quality.innerText = getQuality(item.float);

  infoBox.append(name, quality);

  wrapper.append(img, infoBox, tooltip);

  return wrapper;
}
