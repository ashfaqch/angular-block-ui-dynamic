import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularBlockUiDynamicComponent } from './angular-block-ui-dynamic.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AngularBlockUiDynamicComponent],
  exports: [AngularBlockUiDynamicComponent]
})
export class AngularBlockUiDynamicModule { }
