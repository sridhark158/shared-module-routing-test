import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsComponent } from './claims.component';
import { SharedModule } from '../shared/shared.module'
import { ClaimsRoutingModule } from './claims.routing.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, ClaimsRoutingModule
  ],
  declarations: [ClaimsComponent]
})
export class ClaimsModule { }