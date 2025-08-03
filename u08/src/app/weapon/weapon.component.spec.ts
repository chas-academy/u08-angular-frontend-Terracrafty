import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponComponent } from './weapon.component';
import { Weapon } from '../types';

describe('WeaponComponent', () => {
  let component: WeaponComponent;
  let fixture: ComponentFixture<WeaponComponent>;
  let h1: HTMLElement;

  const testWeapon1:Weapon = {
    _id:"foo",
    name:"Test Weapon 1",
    type:"Sword and Shield",
    raw:69,
    element:0,
    element_type:"",
    affinity:10,
    defense:0,
    slots_1:1,
    slots_2:1,
    slots_3:1,
    skills: [],
    max_sharpness: "green",
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector("h1");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display weapon name", () => {
    component.weapon.set(testWeapon1);
    fixture.detectChanges();
    expect(h1.textContent).toContain("Test Weapon 1");
  })
});
