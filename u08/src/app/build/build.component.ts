import { Component, Signal, signal } from '@angular/core';
import { Weapon, Armor } from '../types';

@Component({
  selector: 'app-build',
  imports: [],
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent {
  weapon = signal(null);
  head = signal(null);
  chest = signal(null);
  arms = signal(null);
  waist = signal(null);
  legs = signal(null);
}
