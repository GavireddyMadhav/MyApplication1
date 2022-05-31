import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupdetailsComponent } from './setupdetails.component';

describe('SetupdetailsComponent', () => {
  let component: SetupdetailsComponent;
  let fixture: ComponentFixture<SetupdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
