import { Component, OnInit } from '@angular/core';
import { CartItem } from '../Shared/Models/cartItem';
import { CartService } from '../services/cart.service';
import { Cart } from '../Shared/Models/Cart';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
cart!: Cart;
  constructor(private cartService: CartService){
  
    this.setCart();
  }
  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
