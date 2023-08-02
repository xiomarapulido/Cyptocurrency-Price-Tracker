import { TestBed } from '@angular/core/testing';

import { CriptocurrencyManagerService } from './criptocurrency-manager.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CriptocurrencyManagerService', () => {
  let service: CriptocurrencyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient, HttpHandler]
    });
    service = TestBed.inject(CriptocurrencyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
