import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Adddocument } from './addDocument';


describe('Adddocument', () => {
  let component: Adddocument;
  let fixture: ComponentFixture<Adddocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adddocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adddocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
