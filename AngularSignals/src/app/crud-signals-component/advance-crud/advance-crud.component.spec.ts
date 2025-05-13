import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCrudComponent } from './advance-crud.component';

describe('AdvanceCrudComponent', () => {
  let component: AdvanceCrudComponent;
  let fixture: ComponentFixture<AdvanceCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
