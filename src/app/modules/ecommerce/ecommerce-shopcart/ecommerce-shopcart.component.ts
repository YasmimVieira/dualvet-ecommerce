import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products.interface';

@Component({
  selector: 'app-ecommerce-shopcart',
  templateUrl: './ecommerce-shopcart.component.html',
  styleUrls: ['./ecommerce-shopcart.component.scss']
})
export class EcommerceShopcartComponent implements OnInit {

  productInfos: Products;

  constructor() { }

  ngOnInit(): void {
    this.getProductInformations();
  }

  private getProductInformations(): void {
    this.productInfos = JSON.parse(localStorage.getItem('product'));
  }

}
