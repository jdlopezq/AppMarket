import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ItemRegComponent } from './components/item-reg/item-reg.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SalesComponent } from './components/sales/sales.component';
import { AccountingComponent } from './components/accounting/accounting.component';


@NgModule({
  declarations: [
 
    AppComponent,
    LoginComponent,
    ItemRegComponent,
    AdminComponent,
    UserComponent,
    SalesComponent,
    AccountingComponent,
  
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
