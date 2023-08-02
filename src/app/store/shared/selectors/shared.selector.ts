import { createFeatureSelector, createSelector } from '@ngrx/store';

export const SHARED_ASSETS_NAME = 'assets_shared';

const getAssetState = createFeatureSelector<any>(SHARED_ASSETS_NAME);

export const getAsset = createSelector(getAssetState, (state) => {
    return state;
  });
