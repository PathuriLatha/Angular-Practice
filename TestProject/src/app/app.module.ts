import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { IndiaComponent } from './india/india.component';
import { USAComponent } from './usa/usa.component';
import { NewDelhiComponent } from './new-delhi/new-delhi.component';
import { NewMumbaiComponent } from './new-mumbai/new-mumbai.component';
import { NewYorkComponent } from './new-york/new-york.component';
import { WashingtonComponent } from './washington/washington.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    IndiaComponent,
    USAComponent,
    NewDelhiComponent,
    NewMumbaiComponent,
    NewYorkComponent,
    WashingtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

