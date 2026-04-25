import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chefdepartement } from './chefdepartement';

describe('Chefdepartement', () => {
  let component: Chefdepartement;
  let fixture: ComponentFixture<Chefdepartement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chefdepartement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chefdepartement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
