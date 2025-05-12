import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAdvanceComponent } from './crud-advance.component';

describe('CrudAdvanceComponent', () => {
  let component: CrudAdvanceComponent;
  let fixture: ComponentFixture<CrudAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAdvanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
