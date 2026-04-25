import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminchefdepartement } from './adminchefdepartement';

describe('Adminchefdepartement', () => {
  let component: Adminchefdepartement;
  let fixture: ComponentFixture<Adminchefdepartement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminchefdepartement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminchefdepartement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
