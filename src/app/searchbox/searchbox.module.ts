import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    SearchBoxComponent
  ],
  exports: [
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MatIconModule
  ]
})
export class SearchBoxModule { }
