import { TestBed } from '@angular/core/testing';

import { CaptionServiceService } from './caption-service.service';

describe('CaptionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaptionServiceService = TestBed.get(CaptionServiceService);
    expect(service).toBeTruthy();
  });
});
