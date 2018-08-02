import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularBlockUiDynamicModule } from 'angular-block-ui-dynamic';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularBlockUiDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
