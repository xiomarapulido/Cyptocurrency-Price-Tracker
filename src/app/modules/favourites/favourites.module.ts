import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFavouritesComponent } from './components/edit-favourites/edit-favourites.component';
import { FavouritesRoutingModule } from './favourites-routing.module';

@NgModule({
  declarations: [
    EditFavouritesComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }
