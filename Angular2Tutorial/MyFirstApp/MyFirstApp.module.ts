import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyFirstAppComponent } from './MyFirstApp.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MyFirstAppComponent ],
  bootstrap:    [ MyFirstAppComponent ]
  
})
export class MyFirstAppModule { }