import { Component } from '@angular/core';
import { LIST_FAVOURITES_INFO_KEY, LIST_FAVOURITES_KEY } from 'src/app/store/shared/const/storage-const';

@Component({
  selector: 'app-edit-favourites',
  templateUrl: './edit-favourites.component.html',
  styleUrls: ['./edit-favourites.component.scss']
})
export class EditFavouritesComponent {

  favouritesArray: any = [];
  favourites: any = [];
  favouritesID: any = [];

  get showData(){
    if(this.favourites.length > 0){
      return true;
    } else{
      return false;
    } 
  }

  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    if (localStorage.getItem(LIST_FAVOURITES_INFO_KEY)) {
      this.favouritesArray = JSON.parse(String(localStorage.getItem(LIST_FAVOURITES_INFO_KEY)));
      const cleanArray = (arr: any) => {
        const dataMap = arr.map((element: any) => {
          return [element.asset_id, element]
        });
      
        return [...new Map(dataMap).values()];
      }
      this.favourites = cleanArray(this.favouritesArray);
    }

    if (localStorage.getItem(LIST_FAVOURITES_KEY)) {
      this.favouritesID = JSON.parse(String(localStorage.getItem(LIST_FAVOURITES_KEY))); 
    } 
  }

  deleteFavourite(idCurrency: string){
    const index = this.favourites.findIndex((data: any)=> data.asset_id === idCurrency);
    const indexID = this.favouritesID.findIndex((data: any)=> data === idCurrency);
    this.favourites.splice(index, 1);
    this.favouritesID.splice(indexID, 1);

    localStorage.setItem(LIST_FAVOURITES_INFO_KEY, JSON.stringify(this.favourites));
    localStorage.setItem(LIST_FAVOURITES_KEY, JSON.stringify(this.favouritesID));
  }
}
