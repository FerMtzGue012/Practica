import { TestBed } from '@angular/core/testing';

import { RegistrostService } from './registrost.service';

describe('RegistrostService', () => {
  let service: RegistrostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
