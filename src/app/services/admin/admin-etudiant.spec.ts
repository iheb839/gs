import { TestBed } from '@angular/core/testing';

import { AdminEtudiant } from './admin-etudiant';

describe('AdminEtudiant', () => {
  let service: AdminEtudiant;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEtudiant);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
