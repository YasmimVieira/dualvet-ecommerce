import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceDetailsComponent } from './ecommerce-details/ecommerce-details.component';
import { EcommercePaymentsComponent } from './ecommerce-payments/ecommerce-payments.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    EcommerceDetailsComponent,
    EcommercePaymentsComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
