import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceDetailsComponent } from './ecommerce-details/ecommerce-details.component';
import { EcommercePaymentsComponent } from './ecommerce-payments/ecommerce-payments.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { CardComponent } from 'src/app/components/card/card.component';


@NgModule({
  declarations: [
    EcommerceComponent,
    EcommerceDetailsComponent,
    EcommercePaymentsComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
