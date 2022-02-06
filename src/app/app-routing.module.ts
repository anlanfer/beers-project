import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailsComponent} from "./product-details/product-details.component";

export const routes: Routes = [
  {
    path: 'product/:productCode',
    data: {pageLabel: '/product'},
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [ProductDetailsComponent],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
