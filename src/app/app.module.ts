import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{CustomerService} from './customer.service';
import { CtabComponent } from './customer/ctab.component';
import { CformComponent } from './customer/cform.component';
import { FormsModule } from '@angular/forms';
import { ClistComponent } from './customer/clist.component';
import { Mypipe } from './myPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,CtabComponent,CformComponent,ClistComponent,Mypipe
  ],
  imports: [
    BrowserModule,
  FormsModule,  AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
