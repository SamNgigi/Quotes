import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Boot4TestComponent } from './boot4-test/boot4-test.component';


@NgModule({
  declarations: [
    AppComponent,
    Boot4TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
