import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfaComponent } from './mfa.component';
import { MfaEnrollComponent } from './mfa-enroll/mfa-enroll.component';
import { MfaOtpComponent } from './mfa-otp/mfa-otp.component';

@NgModule({
  declarations: [MfaComponent, MfaEnrollComponent, MfaOtpComponent],
  imports: [
    CommonModule
  ]
})
export class MfaModule { }
