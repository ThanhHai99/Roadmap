import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { StructComponent } from './struct/struct.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    StructComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
