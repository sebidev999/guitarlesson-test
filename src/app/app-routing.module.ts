import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
