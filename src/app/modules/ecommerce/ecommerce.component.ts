import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { Products } from 'src/app/interface/products.interface';
import { EcommerceService } from 'src/app/services/ecommerce.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  products!: Products[];

  constructor(
    private ecommercerService: EcommerceService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.ecommercerService.getProducts()
    .subscribe({
      next: (resp) => {
        this.products = resp;
        console.log(resp)
      }
    })
  }

  public selectedProduct(value: string): void {
    this.router.navigate([PageRoutes.PRODUCT_DETAILS]);
  }

}
