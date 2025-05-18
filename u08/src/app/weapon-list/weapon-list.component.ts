import { Component, inject, computed } from '@angular/core';
import { ApiService } from '../api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { WeaponComponent } from "../weapon/weapon.component";

@Component({
  selector: 'app-weapon-list',
  imports: [NgFor, AsyncPipe, WeaponComponent],
  templateUrl: './weapon-list.component.html',
  styleUrl: './weapon-list.component.scss'
})
export class WeaponListComponent {
  api = inject(ApiService);
  weapons = this.api.getWeapons();
}
