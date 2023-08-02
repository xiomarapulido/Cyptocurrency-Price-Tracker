import { createReducer, on } from "@ngrx/store";
import { AssetState } from "./assets.state";
import { loadAssets, loadAssetsSuccess } from "./assets.actions";

const _assetReducer= createReducer(
  AssetState,
  on(loadAssets, (state, action) => {
    return {
      ...state
    };
  }),
  on(loadAssetsSuccess, (state, action) => {
    return {
      ...state,
      assetsList: action.assetsList,
    };
  }),
  on(loadAssets, (state, action) => {
    return {
      ...state
    };
  })
);

export function AssetReducer(state: any, action: any) {
  return _assetReducer(state, action);
}
