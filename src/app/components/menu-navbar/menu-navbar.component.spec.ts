import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavbarComponent } from './menu-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuNavbarComponent', () => {
  let component: MenuNavbarComponent;
  let fixture: ComponentFixture<MenuNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNavbarComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(MenuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
