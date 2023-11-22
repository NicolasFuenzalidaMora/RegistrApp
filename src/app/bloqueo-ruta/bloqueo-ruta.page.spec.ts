import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloqueoRutaPage } from './bloqueo-ruta.page';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BloqueoRutaPage', () => {
  let component: BloqueoRutaPage;
  let fixture: ComponentFixture<BloqueoRutaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BloqueoRutaPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BloqueoRutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
