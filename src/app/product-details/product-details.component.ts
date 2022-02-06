import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PunkService} from "../punk.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  details$ = new Observable<any>();
  code: any;

  constructor(
    protected route: ActivatedRoute,
    protected punkService: PunkService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.code = params.get('productCode');
    });
    this.details$ = this.punkService.getProductDetails(this.code);
  }

}
