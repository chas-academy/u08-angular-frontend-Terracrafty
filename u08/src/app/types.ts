export type Skill = {
  _id: string;
  name: string;
  level: number;
  max_level: number;
}

export type Weapon = {
  _id: string;
  name: string;
  type: string;
  raw: number;
  element: number;
  element_type: string;
  affinity: number;
  defense: number;
  slots_1: number;
  slots_2: number;
  slots_3: number;
  skills: Array<Skill>;
  max_sharpness: string;
}

export enum ArmorType {
  head,
  chest,
  arms,
  waist,
  legs
}

export type Armor = {
  _id: string;
  name: string;
  type: ArmorType;
  defense: number;
  fire_resist: number;
  water_resist: number;
  lightning_resist: number;
  ice_resist: number;
  dragon_resist: number;
  slots_1: number;
  slots_2: number;
  slots_3: number;
  skills: Array<Skill>;
}

export type Decoration = {
  _id: string;
  name: string;
  size: number;
  skills: Array<Skill>;
}

export enum GearTypeEnum {
  weapon,
  armor
}