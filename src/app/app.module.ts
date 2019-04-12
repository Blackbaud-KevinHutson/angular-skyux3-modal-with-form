import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SkyAlertModule, SkyCheckboxModule } from '@blackbaud/skyux/dist/core';

import { AppComponent } from './app.component';
import { SkyAlertDemoComponent } from './sky-alert-demo.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
                  SkyAlertModule, SkyCheckboxModule ],
  declarations: [ AppComponent,
                  SkyAlertDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
