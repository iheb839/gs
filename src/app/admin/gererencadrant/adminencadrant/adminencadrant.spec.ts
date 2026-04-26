import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminencadrant } from './adminencadrant';

describe('Adminencadrant', () => {
  let component: Adminencadrant;
  let fixture: ComponentFixture<Adminencadrant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminencadrant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminencadrant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
