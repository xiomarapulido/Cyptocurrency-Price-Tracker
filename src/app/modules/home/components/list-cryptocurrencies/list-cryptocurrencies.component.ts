import { Component, OnInit } from '@angular/core';
import { AssetsModel } from 'src/app/store/assets/assets.model';
import { Store } from '@ngrx/store';
import { LOAD_ASSETS } from 'src/app/store/assets/assets.actions';
import { LIST_FAVOURITES_INFO_KEY, LIST_FAVOURITES_KEY } from 'src/app/store/shared/const/storage-const';

@Component({
  selector: 'app-list-cryptocurrencies',
  templateUrl: './list-cryptocurrencies.component.html',
  styleUrls: ['./list-cryptocurrencies.component.scss']
})
export class ListCryptocurrenciesComponent implements OnInit {

  assetsList: AssetsModel[] = [];
  assetsFavourite: any = [];
  assetsFavouriteData: AssetsModel[] = [];

  searchText = '';
  characters: any;

  showLoading = true;

  constructor(private store: Store<AssetsModel>) { }

  ngOnInit() {
    this.getFavourites();
    this.getListAssets();
  }

  getListAssets() {
    this.store.dispatch({ type: LOAD_ASSETS });
    this.store.select(state => state)
      .subscribe((data: any) => {
        this.assetsList = data.assets_shared.assetsList;
        if(this.assetsList){
          this.showLoading = false;
        }
      }
      );
  }

  selectFavourite(index: any, asset: AssetsModel) {
    document.getElementById(`element${index}`)?.classList.add('assetFavorite');
    this.assetsFavourite.push(asset.asset_id);
    this.assetsFavouriteData.push(asset)
  }

  ngOnDestroy() {
    this.saveNewFavourites();
  }

  saveNewFavourites() {
    if (this.assetsFavourite) {
      this.assetsFavourite = this.assetsFavourite.filter((item: any, index: any) => {
        return this.assetsFavourite.indexOf(item) === index;
      });
      
      localStorage.setItem(LIST_FAVOURITES_KEY, JSON.stringify(this.assetsFavourite));
      localStorage.setItem(LIST_FAVOURITES_INFO_KEY, JSON.stringify(this.assetsFavouriteData));
    }
  }

  getFavourites() {
    this.assetsFavourite = [];
    this.assetsFavouriteData = [];
    if (localStorage.getItem(LIST_FAVOURITES_KEY)) {
      this.assetsFavourite = JSON.parse(String(localStorage.getItem(LIST_FAVOURITES_KEY)));
    }
    if (localStorage.getItem(LIST_FAVOURITES_INFO_KEY)) {
      this.assetsFavouriteData = JSON.parse(String(localStorage.getItem(LIST_FAVOURITES_INFO_KEY)));
    }
  }

}
