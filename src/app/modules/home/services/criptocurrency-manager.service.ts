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
    const headers = new HttpHeaders({ 'X-CoinAPI-Key': '79FBCE73-6AF5-475A-AEBA-0FB4AB6610A4' });
    const requestOptions = { headers: headers };
    return this.http.get<AssetsModel[]>(`https://rest.coinapi.io/v1/assets`, requestOptions);
  }
}
