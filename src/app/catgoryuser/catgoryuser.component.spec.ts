import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoryuserComponent } from './catgoryuser.component';

describe('CatgoryuserComponent', () => {
  let component: CatgoryuserComponent;
  let fixture: ComponentFixture<CatgoryuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgoryuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgoryuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
