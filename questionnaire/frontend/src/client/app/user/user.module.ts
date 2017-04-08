import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { UserSharedModule } from './shared/user-shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, AlertModule, UserSharedModule],
  exports: [CommonModule, UserSharedModule]
})
export class UserModule { }
