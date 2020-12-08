import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CtabComponent} from './customer/ctab.component';
import {ClistComponent} from './customer/clist.component';

const routes: Routes = [{path:"ctab",component:CtabComponent},
{path:"clist",component:ClistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
