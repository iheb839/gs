import { TestBed } from '@angular/core/testing';

import { Resetpassword } from './resetpassword';

describe('Resetpassword', () => {
  let service: Resetpassword;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Resetpassword);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
