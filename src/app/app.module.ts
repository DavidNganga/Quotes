import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { QuotessComponent } from './quotess/quotess.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuotessComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
