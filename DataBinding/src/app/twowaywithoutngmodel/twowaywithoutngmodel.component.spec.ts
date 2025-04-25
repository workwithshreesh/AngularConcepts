import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaywithoutngmodelComponent } from './twowaywithoutngmodel.component';

describe('TwowaywithoutngmodelComponent', () => {
  let component: TwowaywithoutngmodelComponent;
  let fixture: ComponentFixture<TwowaywithoutngmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowaywithoutngmodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaywithoutngmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
