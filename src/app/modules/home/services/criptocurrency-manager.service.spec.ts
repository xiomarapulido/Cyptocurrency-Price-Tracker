import { TestBed } from '@angular/core/testing';

import { CriptocurrencyManagerService } from './criptocurrency-manager.service';

describe('CriptocurrencyManagerService', () => {
  let service: CriptocurrencyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriptocurrencyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
