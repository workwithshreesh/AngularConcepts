import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComponent } from './list.component';

describe('AllComponent', () => {
  let component: AllComponent;
  let fixture: ComponentFixture<AllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
