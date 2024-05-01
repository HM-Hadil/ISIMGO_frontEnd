import { TestBed } from '@angular/core/testing';

import { PubServiceService } from './pub-service.service';

describe('PubServiceService', () => {
  let service: PubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
