import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AssetsModel } from 'src/app/store/assets/assets.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriptocurrencyManagerService {

  constructor(private readonly http: HttpClient) { }

  getAllCriptocurrency():Observable<AssetsModel[]> {
    const headers = new HttpHeaders({ 'X-CoinAPI-Key': 'FC189672-2E7F-4711-A805-3DBEDE600D1C' });
    const requestOptions = { headers: headers };
    return this.http.get<AssetsModel[]>(`https://rest.coinapi.io/v1/assets`, requestOptions);
  }
}
