import { TestBed } from '@angular/core/testing';

import { AdminChefDepartement } from './admin-chef-departement';

describe('AdminChefDepartement', () => {
  let service: AdminChefDepartement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminChefDepartement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
