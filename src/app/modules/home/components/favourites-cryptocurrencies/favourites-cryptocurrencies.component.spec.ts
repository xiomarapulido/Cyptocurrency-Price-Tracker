import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FavouritesCryptocurrenciesComponent } from './favourites-cryptocurrencies.component';
import { assetsResponseServiceMock, mockLocalStorage } from 'src/app/shared/test/mocks/responses.mock';
import { Store } from '@ngrx/store';
import { AssetsModel } from 'src/app/store/assets/assets.model';
import { of } from 'rxjs';

describe('FavouritesCryptocurrenciesComponent', () => {
  let component: FavouritesCryptocurrenciesComponent;
  let store: Store<AssetsModel>;
  let storeDispatchSpy: jasmine.Spy

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavouritesCryptocurrenciesComponent,
        provideMockStore({})
      ],
    });
    component = TestBed.inject(FavouritesCryptocurrenciesComponent);
    store = TestBed.inject(Store)
    storeDispatchSpy = spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should called getInitialData function', () => {
    spyOn(component, 'getInitialData')
    component.ngOnInit();
    expect(component.getInitialData).toHaveBeenCalled();
  });

  it('should getInitialData function not update the storage', () => {
    spyOn(component, 'getListAssets');
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.getInitialData();
    expect(component.getListAssets).not.toHaveBeenCalled();
  });

  it('should asigned value to assetsFavourites', () => {
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(component, 'getListAssets');
    component.getInitialData();
    expect(component.assetsFavourites).toBeDefined();
  });

  it('should subscribe to select store response and called getAssetsFavorites function', () => {
    const data = {
      assets_shared: {
        assetsList: assetsResponseServiceMock
      }
    }

    spyOn(store, 'select').and.returnValues(of(data));
    spyOn(component, 'getAssetsFavorites');
    component.getListAssets();
    expect(component.getAssetsFavorites).toHaveBeenCalled()
  });

  it('should asigned value to assetsFavouritesList array ', () => {
    component.assetsFavouritesData = [];
    component.assetsFavouritesList = assetsResponseServiceMock;
    component.clearData();
    expect(component.assetsFavouritesData).toEqual(component.assetsFavouritesList);
  });

  it('should not called clearData function ', () => {
    spyOn(component, 'clearData');
    component.assetsAllList = [];
    component.assetsFavourites = [];
    component.getAssetsFavorites();
    expect(component.clearData).not.toHaveBeenCalled()
  });

  it('should add element into assetsFavouritesList array ', () => {
    spyOn(component, 'clearData');
    component.assetsAllList = assetsResponseServiceMock;
    component.assetsFavourites = assetsResponseServiceMock;
    component.getAssetsFavorites();
    expect(component.assetsFavouritesList).toBeDefined()
  });
});
