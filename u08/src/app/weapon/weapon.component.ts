import { Component, computed, model} from '@angular/core';
import { Weapon } from '../types';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { SkillComponent } from "../skill/skill.component";

@Component({
  selector: 'app-weapon',
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, SkillComponent],
  templateUrl: './weapon.component.html',
  styleUrl: './weapon.component.scss'
})
export class WeaponComponent {
  weapon = model.required<Weapon>();
  slots = computed<string>(() => {
    let out = "";
    for (let i = 0; i < this.weapon().slots_3; i++) {
      out += "💠";
    }
    for (let i = 0; i < this.weapon().slots_2; i++) {
      out += "🔷";
    }
    for (let i = 0; i < this.weapon().slots_1; i++) {
      out += "🔹";
    }
    return out;
  })
}
