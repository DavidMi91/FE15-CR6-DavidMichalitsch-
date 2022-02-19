import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';
@Component({
selector: 'app-product-list',
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:IProducts[] = products;
product: IProducts = {} as IProducts;
 constructor(
 private cartService: CartService
) {}
addToCart(index: number) {
 window.alert('Your product has been added to the cart!');
 this.cartService.addToCart(products[index]);
}
ngOnInit(): void {
}
}