import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSignalsComponent } from './counter-signals.component';

describe('CounterSignalsComponent', () => {
  let component: CounterSignalsComponent;
  let fixture: ComponentFixture<CounterSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
