import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFavouritesComponent } from './components/edit-favourites/edit-favourites.component';

const routes: Routes = [
  {
    path: '',
    component: EditFavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouritesRoutingModule { }
