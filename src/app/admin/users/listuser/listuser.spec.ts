import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listuser } from './listuser';

describe('Listuser', () => {
  let component: Listuser;
  let fixture: ComponentFixture<Listuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
