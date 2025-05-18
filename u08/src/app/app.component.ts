import { Component, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Weapon, Armor, Skill } from './types';

@Component({
  selector: 'app-root',
  imports: [],
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
  
}
