import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEstudiantePage } from './home-estudiante.page';

describe('HomeEstudiantePage', () => {
  let component: HomeEstudiantePage;
  let fixture: ComponentFixture<HomeEstudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
