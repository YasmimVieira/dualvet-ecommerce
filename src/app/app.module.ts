import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { EcommerceModule } from './modules/ecommerce/ecommerce.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    EcommerceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
