import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProfesorPage } from './home-profesor.page'; // Make sure this path is correct
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeEstudiantePage', () => {
  let component: HomeProfesorPage;
  let fixture: ComponentFixture<HomeProfesorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProfesorPage], // Include the component, not the module
      imports: [IonicModule.forRoot(), HttpClientTestingModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
