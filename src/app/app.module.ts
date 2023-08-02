import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesCryptocurrenciesComponent } from './modules/components/favourites-cryptocurrencies/favourites-cryptocurrencies.component';
import { LayoutComponent } from './modules/components/layout/layout.component';
import { ListCryptocurrenciesComponent } from './modules/components/list-cryptocurrencies/list-cryptocurrencies.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesCryptocurrenciesComponent,
    LayoutComponent,
    ListCryptocurrenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
