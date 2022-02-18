import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from  './about-page/about-page.component';
import {ProductDetailsComponent} from  './product-details/product-details.component';
import {ProductListComponent} from  './product-list/product-list.component';
import {CartComponent} from  './cart/cart.component';




const routes: Routes = [
  {
  path:"",component: HomePageComponent
  },{
  path: "about",component: AboutPageComponent
  },{
  path: 'cart', component: CartComponent
  },{
  path: 'product-list', component: ProductListComponent
  },{
  path: 'products/:productId', component: ProductDetailsComponent
  }];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }