import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { ArmorComponent } from "../armor/armor.component";

@Component({
  selector: 'app-armor-list',
  imports: [NgFor, AsyncPipe, ArmorComponent],
  templateUrl: './armor-list.component.html',
  styleUrl: './armor-list.component.scss'
})
export class ArmorListComponent {
  api = inject(ApiService);
  armors = this.api.getArmors();
}
