import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listetudiant } from './listetudiant';

describe('Listetudiant', () => {
  let component: Listetudiant;
  let fixture: ComponentFixture<Listetudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listetudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listetudiant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
