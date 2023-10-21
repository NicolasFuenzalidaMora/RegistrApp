import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloqueoRutaPage } from './bloqueo-ruta.page';

describe('BloqueoRutaPage', () => {
  let component: BloqueoRutaPage;
  let fixture: ComponentFixture<BloqueoRutaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BloqueoRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
