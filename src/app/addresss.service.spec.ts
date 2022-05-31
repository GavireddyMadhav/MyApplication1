import { TestBed } from '@angular/core/testing';

import { AddresssService } from './addresss.service';

describe('AddresssService', () => {
  let service: AddresssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddresssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
