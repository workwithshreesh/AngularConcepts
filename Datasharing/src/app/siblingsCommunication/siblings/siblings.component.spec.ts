import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingsComponent } from './siblings.component';

describe('SiblingsComponent', () => {
  let component: SiblingsComponent;
  let fixture: ComponentFixture<SiblingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiblingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
