import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { Products } from 'src/app/interface/products.interface';

@Component({
  selector: 'app-ecommerce-details',
  templateUrl: './ecommerce-details.component.html',
  styleUrls: ['./ecommerce-details.component.scss']
})
export class EcommerceDetailsComponent implements OnInit {

  product: Products;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getProduct()
  }

  private getProduct(): void {
    this.product = JSON.parse(localStorage.getItem('product'));
  }

  public selectedProduct(): void {
    localStorage.setItem('selectedProduct', JSON.stringify(this.product));
    this.router.navigate([PageRoutes.PRODUCT_SHOP_CART]);
  }

}
