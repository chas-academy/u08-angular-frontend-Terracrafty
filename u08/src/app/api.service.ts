import { Injectable } from '@angular/core';
import { Skill, Armor, Decoration, Weapon } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://u05-restful-api-terra.onrender.com/api";
  weapons: Promise<Array<Weapon>>;
  armors: Promise<Array<Armor>>;
  skills: Promise<Array<Skill>>;
  decos: Promise<Array<Decoration>>;

  constructor() {
    this.weapons = this.getWeapons();
    this.armors = this.getArmors();
    this.skills = this.getSkills();
    this.decos = this.getDecos();
  }

  private theyDidSurgeryOnAnArray(array:Array<any>): Array<Skill> {
    const out:Array<Skill> = [];
    array.forEach(skill => {
      out.push({
        _id: skill.skill._id,
        name: skill.skill.name,
        level: skill.level,
        max_level: skill.skill.max_level,
      });
    });
    return out;
  }

  async getWeapons(): Promise<Array<Weapon>> {
    const get = (await (await fetch(`${this.url}/weapons`)).json() as Array<any>);
    const out: Array<Weapon> = [];
    get.forEach(item => {
      out.push({
        _id: item.id,
        name: item.name,
        type: item.type,
        raw: item.raw,
        element: item.element,
        element_type: item?.element_type,
        affinity: item.affinity,
        defense: item.defense,
        slots_1: item.slots_1,
        slots_2: item.slots_2,
        slots_3: item.slots_3,
        skills: this.theyDidSurgeryOnAnArray(item.skills),
        max_sharpness: item.max_sharpness
      });
    });
    return out;
  }
  async getArmors(): Promise<Array<Armor>> {
    const get = (await (await fetch(`${this.url}/armors`)).json() as Array<any>);
    const out: Array<Armor> = [];
    get.forEach(item => {
      out.push({
        _id: item._id,
        name: item.name,
        type: item.type,
        defense: item.defense,
        fire_resist: item.fire_resist,
        water_resist: item.water_resist,
        lightning_resist: item.water_resist,
        ice_resist: item.ice_resist,
        dragon_resist: item.dragon_resist,
        slots_1: item.slots_1,
        slots_2: item.slots_2,
        slots_3: item.slots_3,
        skills: this.theyDidSurgeryOnAnArray(item.skills)
      });
    });
    return out;
  }
  async getSkills(): Promise<Array<Skill>> {
    const get = (await (await fetch(`${this.url}/skills`)).json() as Array<any>);
    const out: Array<Skill> = [];
    get.forEach(item => {
      out.push({
        _id: item._id,
        name: item.name,
        level: 0,
        max_level: item.max_level
      });
    });
    return out;
  }
  async getDecos(): Promise<Array<Decoration>> {
    const get = (await (await fetch(`${this.url}/skills`)).json() as Array<any>);
    const out: Array<Decoration> = [];
    get.forEach(item => {
      out.push({
        _id: item._id,
        name: item.name,
        size: item.size,
        skills: this.theyDidSurgeryOnAnArray(item.skills),
      });
    });
    return out;
  }
}

export type {Skill, Decoration, Armor, Weapon}
