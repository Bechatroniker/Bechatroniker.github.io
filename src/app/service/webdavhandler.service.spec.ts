import { TestBed } from '@angular/core/testing';

import { WebdavhandlerService } from './webdavhandler.service';

describe('WebdavhandlerService', () => {
  let service: WebdavhandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebdavhandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
