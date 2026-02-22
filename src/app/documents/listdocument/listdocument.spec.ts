import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listdocument } from './listdocument';

describe('Listdocument', () => {
  let component: Listdocument;
  let fixture: ComponentFixture<Listdocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listdocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listdocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
