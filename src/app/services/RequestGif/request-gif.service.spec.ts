import { TestBed } from '@angular/core/testing';

import { RequestGifService } from './request-gif.service';

describe('RequestGifService', () => {
  let service: RequestGifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestGifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
