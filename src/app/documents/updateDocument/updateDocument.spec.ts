import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Updatedocument } from './updateDocument';
describe('Updatedocument', () => {
  let component: Updatedocument;
  let fixture: ComponentFixture<Updatedocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatedocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatedocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
