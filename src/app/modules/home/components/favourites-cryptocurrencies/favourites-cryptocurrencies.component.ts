import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOAD_ASSETS } from 'src/app/store/assets/assets.actions';
import { AssetsModel } from 'src/app/store/assets/assets.model';
import { LIST_FAVOURITES_KEY } from 'src/app/store/shared/const/storage-const';

@Component({
  selector: 'app-favourites-cryptocurrencies',
  templateUrl: './favourites-cryptocurrencies.component.html',
  styleUrls: ['./favourites-cryptocurrencies.component.scss']
})
export class FavouritesCryptocurrenciesComponent implements OnInit {

  assetsFavouritesList: any = [];
  assetsFavouritesData: any = [];
  assetsFavourites: any = [];
  assetsAllList: AssetsModel[] = [];
  isFavouritesData = false;

  constructor(private store: Store<AssetsModel>) { }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {

    if (localStorage.getItem(LIST_FAVOURITES_KEY)) {
      this.assetsFavourites = JSON.parse(String(localStorage.getItem(LIST_FAVOURITES_KEY))); 
      this.getListAssets();
    } 
  }

  getListAssets() {
    this.store.dispatch({ type: LOAD_ASSETS });
    this.store.select(state => state)
      .subscribe((data: any) => {
        this.assetsAllList = data.assets_shared.assetsList;
        this.getAssetsFavorites();
      }
      );
  }

  getAssetsFavorites() {
    if (this.assetsAllList && this.assetsFavourites.length > 0) {
      this.isFavouritesData = true;
      this.assetsAllList.forEach(element => {
        this.assetsFavourites.forEach((data: any) => {
          if (element.asset_id === data) {
            this.assetsFavouritesList.push(element)
          }
        })
      });
      this.clearData();
    }
  }

  clearData(){
    const cleanArray = (arr: any) => {
      const dataMap = arr.map((element: any) => {
        return [element.asset_id, element]
      });
    
      return [...new Map(dataMap).values()];
    }
    this.assetsFavouritesData = cleanArray(this.assetsFavouritesList);
  }



}
