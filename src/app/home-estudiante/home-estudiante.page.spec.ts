import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEstudiantePage } from './home-estudiante.page'; // Make sure this path is correct
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeEstudiantePage', () => {
  let component: HomeEstudiantePage;
  let fixture: ComponentFixture<HomeEstudiantePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEstudiantePage], // Include the component, not the module
      imports: [IonicModule.forRoot(), HttpClientTestingModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
