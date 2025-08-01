import { Component, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Weapon, Armor, Skill } from './types';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { ArmorListComponent } from './armor-list/armor-list.component';
import { NgComponentOutlet } from '@angular/common';
import { WeaponComponent } from "./weapon/weapon.component";
import { ArmorComponent } from './armor/armor.component';

export enum GearListType {
  none,
  weapon,
  armor,
}

@Component({
  selector: 'app-root',
  imports: [NgComponentOutlet, WeaponComponent, ArmorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  api = inject(ApiService);
  weapon = signal<Weapon|null>(null);
  head = signal<Armor|null>(null);
  chest = signal<Armor|null>(null);
  arms = signal<Armor|null>(null);
  waist = signal<Armor|null>(null);
  legs = signal<Armor|null>(null);

  activeGearList = signal<GearListType>(0);

  renderGearList() {
    switch (this.activeGearList()) {
      case GearListType.none:
        return null;
      case GearListType.weapon:
        return WeaponListComponent;
      case GearListType.armor:
        return ArmorListComponent;
    }
  }
}
