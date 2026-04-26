import { TestBed } from '@angular/core/testing';

import { AdminEncadrant } from './admin-encadrant';

describe('AdminEncadrant', () => {
  let service: AdminEncadrant;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEncadrant);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
