import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCryptocurrenciesComponent } from './components/list-cryptocurrencies/list-cryptocurrencies.component';
import { FavouritesCryptocurrenciesComponent } from './components/favourites-cryptocurrencies/favourites-cryptocurrencies.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    ListCryptocurrenciesComponent,
    FavouritesCryptocurrenciesComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
