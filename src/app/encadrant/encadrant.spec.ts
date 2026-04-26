import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encadrant } from './encadrant';

describe('Encadrant', () => {
  let component: Encadrant;
  let fixture: ComponentFixture<Encadrant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Encadrant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encadrant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
