import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CriptocurrencyManagerServiceMock {

  constructor(private readonly http: HttpClient) { }

  getAllCriptocurrency() {
  }
}
