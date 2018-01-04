import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { Boot4TestComponent } from './boot4-test/boot4-test.component';
import { HeaderComponent } from './header/header.component';
import { WriteQouteComponent } from './write-qoute/write-qoute.component';


@NgModule({
  declarations: [
    AppComponent,
    Boot4TestComponent,
    HeaderComponent,
    WriteQouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
