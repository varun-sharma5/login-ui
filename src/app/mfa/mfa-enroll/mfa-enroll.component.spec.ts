import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaEnrollComponent } from './mfa-enroll.component';

describe('MfaEnrollComponent', () => {
  let component: MfaEnrollComponent;
  let fixture: ComponentFixture<MfaEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
