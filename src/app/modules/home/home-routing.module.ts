import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCryptocurrenciesComponent } from './components/list-cryptocurrencies/list-cryptocurrencies.component';
import { FavouritesCryptocurrenciesComponent } from './components/favourites-cryptocurrencies/favourites-cryptocurrencies.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'listCryptocurrencies',
        pathMatch: 'full'
      },
      {
        path: 'listCryptocurrencies',
        component: ListCryptocurrenciesComponent
      },
      {
        path: 'favouritesCryptocurrencies',
        component: FavouritesCryptocurrenciesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
