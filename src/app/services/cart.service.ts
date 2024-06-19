import { Injectable } from '@angular/core';
import { Cart } from '../Shared/Models/Cart';
import { foods } from '../Shared/Models/food';
import { CartItem } from '../Shared/Models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();
  addToCart(food:foods):void{
    let cartItem  = this.cart.items.find(item => item.food.id ===food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity +1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }
  changeQuantity(quantity:number,foodId:number){
    let cartItem = this.cart.items.find(item=> item.food.id===foodId);
    if(!cartItem) return;
    CartItem.quantity =quantity;
  }
  getCart():Cart{
     return this.cart;
  }
}
