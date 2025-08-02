import { Component, inject, computed, output } from '@angular/core';
import { ApiService, Weapon } from '../api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { WeaponComponent } from "../weapon/weapon.component";
import { StateService } from '../state.service';

@Component({
  selector: 'app-weapon-list',
  imports: [NgFor, AsyncPipe, WeaponComponent],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.scss'
})
export class WeaponListComponent {
  api = inject(ApiService);
  state = inject(StateService);
  weapons = this.api.getWeapons();
}
