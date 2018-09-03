import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LpEntryComponent } from './components/lp-entry.component';
import { LpListComponent } from './components/lp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LpEntryComponent,
    LpListComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }