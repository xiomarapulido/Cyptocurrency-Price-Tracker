import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCryptocurrenciesComponent } from './list-cryptocurrencies.component';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AssetsModel } from 'src/app/store/assets/assets.model';
import { assetsResponseServiceMock, mockLocalStorage } from 'src/app/shared/test/mocks/responses.mock';
import { of } from 'rxjs';

describe('ListCryptocurrenciesComponent', () => {
  let component: ListCryptocurrenciesComponent;
  let store: Store<AssetsModel>;
  let storeDispatchSpy: jasmine.Spy

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ListCryptocurrenciesComponent,
        provideMockStore({})
      ]
    });
    component = TestBed.inject(ListCryptocurrenciesComponent);
    store = TestBed.inject(Store)
    storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called getFavourites and getListAssets functions', () => {
    spyOn(component, 'getFavourites');
    spyOn(component, 'getListAssets');
    component.ngOnInit();
    expect(component.getFavourites).toHaveBeenCalled();
    expect(component.getListAssets).toHaveBeenCalled();
  });

  it('should change value of showLoading ', () => {
    component.showLoading = true;
    const data = {
      assets_shared: {
        assetsList: assetsResponseServiceMock
      }
    }

    spyOn(store, 'select').and.returnValues(of(data));
    component.getListAssets();
    expect(component.showLoading).toBeFalse();
  });

  it('should defined assetsFavourite and assetsFavouriteData arrays', () => {
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    component.getFavourites();
    expect(component.assetsFavourite).toBeDefined();
    expect(component.assetsFavouriteData).toBeDefined();
  });

  it('should called saveNewFavourites function', () => {
    spyOn(component, 'saveNewFavourites')
    component.ngOnDestroy();
    expect(component.saveNewFavourites).toHaveBeenCalled();
  });

  it('should add element into assetsFavourite and assetsFavouriteData arrays', () => {
    spyOn(document, 'getElementById').and.returnValue({
      classList:{
        add: jasmine.createSpy()
      }
    } as any)
    component.selectFavourite(0, assetsResponseServiceMock[0]);
    expect(component.assetsFavourite).toBeDefined();
    expect(component.assetsFavouriteData).toBeDefined();
  });

});
