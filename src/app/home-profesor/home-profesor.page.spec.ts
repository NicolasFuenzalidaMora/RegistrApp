import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProfesorPage } from './home-profesor.page';

describe('HomeProfesorPage', () => {
  let component: HomeProfesorPage;
  let fixture: ComponentFixture<HomeProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
