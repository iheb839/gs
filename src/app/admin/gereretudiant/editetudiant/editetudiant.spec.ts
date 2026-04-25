import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editetudiant } from './editetudiant';

describe('Editetudiant', () => {
  let component: Editetudiant;
  let fixture: ComponentFixture<Editetudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editetudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editetudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
