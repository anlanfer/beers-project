import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PaginationModule} from "./pagination/pagination.module";
import {CommonModule} from "@angular/common";
import {SearchBoxModule} from "./searchbox/searchbox.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "./card/card.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    PaginationModule,
    SearchBoxModule,
    ReactiveFormsModule,
    CardModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
