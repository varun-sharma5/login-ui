import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfaOtpComponent } from './mfa-otp.component';

describe('MfaOtpComponent', () => {
  let component: MfaOtpComponent;
  let fixture: ComponentFixture<MfaOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfaOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfaOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
