import { Component, OnInit } from '@angular/core';
import { foods } from '../Shared/Models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit{
 food!:foods;
  constructor(private activatedRoute:ActivatedRoute,
     private foodService:FoodService, 
     private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params)=> {
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
