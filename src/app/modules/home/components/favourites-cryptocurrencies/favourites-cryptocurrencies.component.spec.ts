import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesCryptocurrenciesComponent } from './favourites-cryptocurrencies.component';
import { ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store } from '@ngrx/store';

xdescribe('FavouritesCryptocurrenciesComponent', () => {
  let component: FavouritesCryptocurrenciesComponent;
  let fixture: ComponentFixture<FavouritesCryptocurrenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesCryptocurrenciesComponent],
      providers:[Store, 
        StateObservable, 
        ActionsSubject, 
        ReducerManager, 
        ReducerManagerDispatcher], 
    });
    fixture = TestBed.createComponent(FavouritesCryptocurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
