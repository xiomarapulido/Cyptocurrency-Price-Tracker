import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCryptocurrenciesComponent } from './components/list-cryptocurrencies/list-cryptocurrencies.component';
import { FavouritesCryptocurrenciesComponent } from './components/favourites-cryptocurrencies/favourites-cryptocurrencies.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AssetsEffects } from 'src/app/store/assets/assets.effects';
import { StoreModule } from '@ngrx/store';
import { AssetReducer } from 'src/app/store/assets/assets.reducer';
import { SHARED_ASSETS_NAME } from 'src/app/store/shared/selectors/shared.selector';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    ListCryptocurrenciesComponent,
    FavouritesCryptocurrenciesComponent,
    LayoutComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    StoreModule.forFeature(SHARED_ASSETS_NAME,AssetReducer),
    EffectsModule.forFeature([AssetsEffects])
  ]
})
export class HomeModule { }
