import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsFunctionsComponent } from './signals-functions.component';

describe('SignalsFunctionsComponent', () => {
  let component: SignalsFunctionsComponent;
  let fixture: ComponentFixture<SignalsFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsFunctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
