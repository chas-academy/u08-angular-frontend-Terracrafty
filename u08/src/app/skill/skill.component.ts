import { Component, computed, Signal, model } from '@angular/core';
import { Skill } from '../types';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  skill = model.required<Skill>();
  boxes: Signal<string | null> = computed(() => {
    let out = "";
    const filled = Math.min(this.skill().max_level, this.skill().level);
    const empty = this.skill().max_level - filled;
    for (let i = 0; i < filled; i++) {
      out += "🔲";
    }
    for (let i = 0; i < empty; i++) {
      out += "⬛️";
    }
    return out;
  });
}
