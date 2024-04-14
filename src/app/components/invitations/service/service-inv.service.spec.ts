import { TestBed } from '@angular/core/testing';

import { ServiceInvService } from '../service-inv.service';

describe('ServiceInvService', () => {
  let service: ServiceInvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceInvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
