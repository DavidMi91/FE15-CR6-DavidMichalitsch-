import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';
import * as swal from '@sweetalert2/ngx-sweetalert2';




@Component({
selector: 'cart',
templateUrl: './cart.component.html',
styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
items: IProducts[] = [];
checkoutForm = this.fb.group({
  name: '',
  address: '',
});

constructor(private cartService: CartService, private fb: FormBuilder) {}

clearCart() {
  window.alert('Your cart has been cleared');
  this.items = this.cartService.clearCart();
}
// getTotal calculates the sum of items in cart 
getTotal(){
  let total = 0;
  for (var i = 0; i < this.items.length; i++) {
      if (this.items[i]) {
          total += this.items[i].price;
      }
    }
  // console.log(total)
  return total;

}
// getServiceCharge calculates the amount of service charge
getServiceCharge(){
  return this.getTotal()*0.10;
}
// 15% discount for orders of €40+
getDiscountedTotal(){
  if(this.getTotal() >= 40){
    var discountedTotal = this.getTotal()*0.85;
    return discountedTotal
  } else {
    return this.getTotal()
  }
}
// adds service charge to discounted total
getDiscountedTotalWithServiceCharge(){
  return this.getDiscountedTotal() + this.getServiceCharge();
}
// adds service charge to total without discount
getTotalWithServiceCharge(){
  return this.getTotal() + this.getServiceCharge();
}
 onSubmit() {
  console.warn('Your order has been submitted', this.checkoutForm.value);
  alert("Thank you for your order! Your cart has been cleared.")
  this.items = this.cartService.clearCart();
  this.checkoutForm.reset();
}

ngOnInit(): void {
  this.items = this.cartService.getItems();
}
}