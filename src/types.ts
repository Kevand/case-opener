export type Rarity =
  | "Mil-Spec"
  | "Restricted"
  | "Classified"
  | "Covert"
  | "Covert Knife";
export type Item = {
  readonly name: string;
  readonly rarity: Rarity;
  readonly floatCap?: FloatCap;
  readonly imageUrl?: string;
};

export type DroppedItem = {
  stattrack: boolean;
  float: number;
} & Item;

export type FloatCap = readonly [number, number];
