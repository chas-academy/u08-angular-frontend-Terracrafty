import { Component, model, computed} from '@angular/core';
import { Armor } from '../types';
import { SkillComponent } from '../skill/skill.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-armor',
  imports: [SkillComponent, NgFor],
  templateUrl: './armor.component.html',
  styleUrl: './armor.component.scss'
})
export class ArmorComponent {
  armor = model.required<Armor>();
  slots = computed<string>(() => {
    let out = "";
    for (let i = 0; i < this.armor().slots_3; i++) {
      out += "💠";
    }
    for (let i = 0; i < this.armor().slots_2; i++) {
      out += "🔷";
    }
    for (let i = 0; i < this.armor().slots_1; i++) {
      out += "🔹";
    }
    return out;
  })
}
