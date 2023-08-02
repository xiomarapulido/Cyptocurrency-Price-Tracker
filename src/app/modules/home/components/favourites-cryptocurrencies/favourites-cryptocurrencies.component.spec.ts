import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesCryptocurrenciesComponent } from './favourites-cryptocurrencies.component';

describe('FavouritesCryptocurrenciesComponent', () => {
  let component: FavouritesCryptocurrenciesComponent;
  let fixture: ComponentFixture<FavouritesCryptocurrenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesCryptocurrenciesComponent]
    });
    fixture = TestBed.createComponent(FavouritesCryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
