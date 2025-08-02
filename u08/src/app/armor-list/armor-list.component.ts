import { Component, computed, inject, output, Signal, signal } from '@angular/core';
import { ApiService, Armor } from '../api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { ArmorComponent } from "../armor/armor.component";
import { ArmorType } from '../types';
import { StateService } from '../state.service';

@Component({
  selector: 'app-armor-list',
  imports: [AsyncPipe, ArmorComponent],
  templateUrl: './armor-list.component.html',
  styleUrl: './armor-list.component.scss'
})
export class ArmorListComponent {
  api = inject(ApiService);
  state = inject(StateService);
  armors = this.api.getArmors();
  headArmors: Signal<Promise<Array<Armor>>> = computed(async () => {
    const armors = await this.api.armors;
    const out: Array<Armor> = [];
    armors.forEach(armor => {
      if (armor.type == ArmorType.head) {
        out.push(armor);
      }
    });
    return out;
  });
  chestArmors: Signal<Promise<Array<Armor>>> = computed(async () => {
    const armors = await this.api.armors;
    const out: Array<Armor> = [];
    armors.forEach(armor => {
      if (armor.type == ArmorType.chest) {
        out.push(armor);
      }
    });
    return out;
  });
  armArmors: Signal<Promise<Array<Armor>>> = computed(async () => {
    const armors = await this.api.armors;
    const out: Array<Armor> = [];
    armors.forEach(armor => {
      if (armor.type == ArmorType.arms) {
        out.push(armor);
      }
    });
    return out;
  });
  waistArmors: Signal<Promise<Array<Armor>>> = computed(async () => {
    const armors = await this.api.armors;
    const out: Array<Armor> = [];
    armors.forEach(armor => {
      if (armor.type == ArmorType.waist) {
        out.push(armor);
      }
    });
    return out;
  });
  legArmors: Signal<Promise<Array<Armor>>> = computed(async () => {
    const armors = await this.api.armors;
    const out: Array<Armor> = [];
    armors.forEach(armor => {
      if (armor.type == ArmorType.legs) {
        out.push(armor);
      }
    });
    return out;
  });
}
