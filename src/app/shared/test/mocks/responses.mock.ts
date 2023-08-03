import { AssetsModel } from "src/app/store/assets/assets.model";

export const urlServiceGetMock = 'https://rest.coinapi.io/v1/assets';

export const assetsResponseServiceMock: AssetsModel[] = [
    {
      "asset_id": "BTC",
      "name": "Bitcoin",
      "type_is_crypto": 1,
      "data_quote_start": "2014-02-24T00:00:00.0000000Z",
      "data_quote_end": "2023-07-30T00:00:00.0000000Z",
      "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
      "data_orderbook_end": "2023-07-07T00:00:00.0000000Z",
      "data_trade_start": "2010-07-17T00:00:00.0000000Z",
      "data_trade_end": "2023-07-30T00:00:00.0000000Z",
      "data_symbols_count": 160189,
      "volume_1hrs_usd": 339546374303859.4,
      "volume_1day_usd": 28173292933716076,
      "volume_1mth_usd": 14668481521495419000,
      "price_usd": 29204.77236212382,
      "id_icon": "4caf2b16-a017-4e26-a348-2cea69c34cba",
      "data_start": "2010-07-17",
      "data_end": "2023-07-30"
    },
    {
      "asset_id": "UDS",
      "name": "USD DOLLAR",
      "type_is_crypto": 2,
      "data_quote_start": "2014-02-24T00:00:00.0000000Z",
      "data_quote_end": "2023-07-30T00:00:00.0000000Z",
      "data_orderbook_start": "2014-02-24T17:43:05.0000000Z",
      "data_orderbook_end": "2023-07-07T00:00:00.0000000Z",
      "data_trade_start": "2010-07-17T00:00:00.0000000Z",
      "data_trade_end": "2023-07-30T00:00:00.0000000Z",
      "data_symbols_count": 160189,
      "volume_1hrs_usd": 339546374303859.4,
      "volume_1day_usd": 28173292933716076,
      "volume_1mth_usd": 14668481521495419000,
      "price_usd": 29204.77236212382,
      "id_icon": "4caf2b16-a017-4e26-a348-2cea69c34cba",
      "data_start": "2010-07-17",
      "data_end": "2023-07-30"
    }
  ]
  let store: any = {};

  export const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };