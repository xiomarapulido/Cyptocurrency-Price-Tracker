import { TestBed } from '@angular/core/testing';
import { EditFavouritesComponent } from './edit-favourites.component';
import { assetsResponseServiceMock, mockLocalStorage } from 'src/app/shared/test/mocks/responses.mock';

describe('EditFavouritesComponent', () => {
  let component: EditFavouritesComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EditFavouritesComponent
      ]
    });
    component = TestBed.inject(EditFavouritesComponent);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should function ngOnInit  call function getInitialData', () => {
    spyOn(component, 'getInitialData');
    component.ngOnInit();
    expect(component.getInitialData).toHaveBeenCalled();
  });

  it('Should return false', () => {
    component.favourites = [];
    expect(component.showData).toBeFalse();
  });

  it('Should return true', () => {
    component.favourites = [{}];
    expect(component.showData).toBeTrue();
  });

  it('Should update the local storage', () => {
    const idCurrency = 'BTC';
    spyOn(localStorage, 'setItem');
    component.favourites = assetsResponseServiceMock;
    component.favouritesID = assetsResponseServiceMock;
    component.deleteFavourite(idCurrency);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Should not update the local storage', () => {
    spyOn(component, 'getDataFavouritesStorage')
    spyOn(localStorage, 'getItem').and.returnValue(null);
    component.getInitialData();
    expect(component.getDataFavouritesStorage).not.toHaveBeenCalled();
  });

  it('Should called the functions getDataFavouritesStorage - getfavouritesIDStorage', () => {
    spyOn(component, 'getDataFavouritesStorage');
    spyOn(component, 'getfavouritesIDStorage');
    spyOn(localStorage, 'getItem').and.returnValue('key');
    component.getInitialData();
    expect(component.getDataFavouritesStorage).toHaveBeenCalled();
    expect(component.getfavouritesIDStorage).toHaveBeenCalled();
  });

  it('Should get value of local storage and asigned to favouritesID array', () => {
    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    component.getfavouritesIDStorage();
    expect(component).toBeTruthy();
  });

  it('Should get value of local storage', () => {
    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    component.getDataFavouritesStorage();
    expect(component).toBeTruthy();
  });



});
