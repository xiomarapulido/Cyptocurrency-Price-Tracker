import { createAction, props } from "@ngrx/store";
import { AssetsModel } from "./assets.model";

export const LOAD_ASSETS = '[List cryptocurrencies page] Load assets';
export const LOAD_ASSETS_SUCCESS = '[List cryptocurrencies page] Load assets success';

export const loadAssets = createAction(LOAD_ASSETS);
export const loadAssetsSuccess = createAction(LOAD_ASSETS_SUCCESS, props<any>());
