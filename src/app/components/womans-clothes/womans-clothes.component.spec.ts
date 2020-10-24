import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomansClothesComponent } from './womans-clothes.component';

describe('WomansClothesComponent', () => {
  let component: WomansClothesComponent;
  let fixture: ComponentFixture<WomansClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomansClothesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomansClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
