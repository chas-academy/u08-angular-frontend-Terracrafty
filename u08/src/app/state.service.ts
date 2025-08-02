import { Injectable, signal } from '@angular/core';
import { Armor, Weapon } from './types';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  weapon = signal<Weapon|null>(null);
  head = signal<Armor|null>(null);
  chest = signal<Armor|null>(null);
  arms = signal<Armor|null>(null);
  waist = signal<Armor|null>(null);
  legs = signal<Armor|null>(null);

  activeGearList = signal<string>("");

  constructor() { }
}
