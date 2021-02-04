import { TestBed } from '@angular/core/testing';

import { RequestStickerService } from './request-sticker.service';

describe('RequestStickerService', () => {
  let service: RequestStickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestStickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
