import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from './enum/page-routes.enum';

const routes: Routes = [
  { path: '', redirectTo: PageRoutes.PRODUCT_LIST, pathMatch: 'full' },
  { path: PageRoutes.PRODUCT_LIST, loadChildren: () => import('./modules/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: PageRoutes.LOGIN, loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
