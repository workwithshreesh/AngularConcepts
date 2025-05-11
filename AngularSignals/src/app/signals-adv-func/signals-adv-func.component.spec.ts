import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsAdvFuncComponent } from './signals-adv-func.component';

describe('SignalsAdvFuncComponent', () => {
  let component: SignalsAdvFuncComponent;
  let fixture: ComponentFixture<SignalsAdvFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsAdvFuncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsAdvFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
