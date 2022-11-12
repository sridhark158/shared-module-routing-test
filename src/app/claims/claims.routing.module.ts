import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsComponent } from './claims.component';


const routes: Routes = [{
  path: '',
  component: ClaimsComponent,
  children: [
    { path: '', component: ClaimsComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
