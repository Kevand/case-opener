import type { Item } from "../types";

const floatCaps = {
  Vanilla: [0, 0],
  "Gamma Doppler": [0, 0.08],
  Autotronic: [0, 0.85],
  Lore: [0, 0.65],
  "Black Laminate": [0, 1],
  Stained: [0, 1],
  "Blue Steel": [0, 1],
  Freehand: [0, 0.48],
  "Bright Water": [0, 0.5],
  "Damascus Steel": [0, 0.5],
  Doppler: [0, 0.08],
  "Marble Fade": [0, 0.08],
  "Tiger Tooth": [0, 0.08],
  Ultraviolet: [0.06, 0.8],
  "Rust Coat": [0.4, 1],
  Fade: [0, 0.08],
  "Case Hardened": [0, 1],
  Slaughter: [0.01, 0.26],
  "Crimson Web": [0.06, 0.8],
  Night: [0.06, 0.8],
  "Night Stripe": [0.06, 0.8],
  "Boreal Forest": [0.06, 0.8],
  "Urban Masked": [0.06, 0.8],
  Scorched: [0.06, 0.8],
  "Forest DDPAT": [0.06, 0.8],
  "Safari Mesh": [0.06, 0.8],
} as const;
type KnifeSkins = keyof typeof floatCaps;

export const knife = (knife: string, skin: KnifeSkins): Item => {
  return {
    rarity: "Covert Knife",
    name: `${knife} | ${skin}`,
    floatCap: floatCaps[skin],
  };
};

export const millspec = (name: string, imageUrl?: string): Item => ({
  name,
  rarity: "Mil-Spec",
  imageUrl,
});
export const restricted = (name: string, imageUrl?: string): Item => ({
  name,
  rarity: "Restricted",
  imageUrl,
});
export const classified = (name: string, imageUrl?: string): Item => ({
  name,
  rarity: "Classified",
  imageUrl,
});
export const covert = (name: string, imageUrl?: string): Item => ({
  name,
  rarity: "Covert",
  imageUrl,
});
