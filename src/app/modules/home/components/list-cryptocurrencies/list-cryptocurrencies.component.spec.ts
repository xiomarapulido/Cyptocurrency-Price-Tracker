import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCryptocurrenciesComponent } from './list-cryptocurrencies.component';

describe('ListCryptocurrenciesComponent', () => {
  let component: ListCryptocurrenciesComponent;
  let fixture: ComponentFixture<ListCryptocurrenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCryptocurrenciesComponent]
    });
    fixture = TestBed.createComponent(ListCryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
