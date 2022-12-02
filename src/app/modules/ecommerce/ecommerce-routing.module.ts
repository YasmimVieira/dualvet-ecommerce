import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from 'src/app/enum/page-routes.enum';
import { EcommerceDetailsComponent } from './ecommerce-details/ecommerce-details.component';
import { EcommercePaymentsComponent } from './ecommerce-payments/ecommerce-payments.component';
import { EcommerceShopcartComponent } from './ecommerce-shopcart/ecommerce-shopcart.component';
import { EcommerceComponent } from './ecommerce.component';

const routes: Routes = [
  { path: '', component: EcommerceComponent },
  { path: PageRoutes.PRODUCT_DETAILS, component: EcommerceDetailsComponent },
  { path: PageRoutes.PRODUCT_PAYMENTS, component: EcommercePaymentsComponent },
  { path: PageRoutes.PRODUCT_SHOP_CART, component: EcommerceShopcartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
