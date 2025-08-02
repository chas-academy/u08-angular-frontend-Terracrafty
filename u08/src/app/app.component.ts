import { Component, inject, signal, viewChild } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { WeaponComponent } from "./weapon/weapon.component";
import { ArmorComponent } from './armor/armor.component';
import { StateService } from './state.service';
import { WeaponListComponent } from "./weapon-list/weapon-list.component";
import { ArmorListComponent } from "./armor-list/armor-list.component";

@Component({
  selector: 'app-root',
  imports: [WeaponComponent, ArmorComponent, WeaponListComponent, ArmorListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  state = inject(StateService);
}
