import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CriptocurrencyManagerService } from './criptocurrency-manager.service';
import { assetsResponseServiceMock, urlServiceGetMock } from 'src/app/shared/test/mocks/responses.mock';

describe('CriptocurrencyManagerService', () => {
  let service: CriptocurrencyManagerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[CriptocurrencyManagerService],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CriptocurrencyManagerService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected assets by calling once', () => {
    service.getAllCriptocurrency().subscribe(
      response => expect(response).toEqual(assetsResponseServiceMock)
    );
    const req = httpTestingController.expectOne(urlServiceGetMock);
    expect(req.request.method).toEqual('GET');

    req.flush(assetsResponseServiceMock); 
  });
});
