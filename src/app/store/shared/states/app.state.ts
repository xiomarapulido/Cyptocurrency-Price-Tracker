import { AssetReducer } from "../../assets/assets.reducer";
import { SHARED_ASSETS_NAME } from "../selectors/shared.selector";

export const assetReducer = {
  [SHARED_ASSETS_NAME]: AssetReducer
};
