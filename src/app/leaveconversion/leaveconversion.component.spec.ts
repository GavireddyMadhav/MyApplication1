import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveconversionComponent } from './leaveconversion.component';

describe('LeaveconversionComponent', () => {
  let component: LeaveconversionComponent;
  let fixture: ComponentFixture<LeaveconversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveconversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
