import { Injectable } from '@angular/core';
import { foods } from '../../Shared/Models/food';
import { Tag } from '../../Shared/Models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
 
  getFoodById(id:number):foods{
    return this.getAll().find(food => food.id ==id)!;
  }

  getAllFoodByTag(tag:string): foods[]{
     return tag=="All"?
     this.getAll():this.getAll().filter(food=> food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      {name:'All', count:33},
      {name:'fastfood', count:10},
      {name:'noodles', count:2},
      {name:'pizza',count:4},
      {name:'lunch', count:19},
      {name:'dinner',count:20},
      {name:'slowfood', count:6},
      {name:'fry', count:6},
      {name:'soup', count:3},
      {name:'veg', count:26},
      {name:'nonveg', count:9}
    ];
  }
  getAll():foods[]{
    return [
       {
        id:1,
        name:'Noodles',
        cookTime:'10-20',
        price:150,
        favorite:false,
        origins:['itali'],
        star:4.5,
        imageUrl:'/assets/5.jpg',
        tags: ['fastfood','starter','veg','noodles'],
       },
       {
        id:2,
        name:'Chicken Biryani',
        price:350,
        cookTime:'20-30',
        favorite:true,
        origins:['persia','middle east', 'china'],
        star:4.7,
        imageUrl:'assets/6.jpg',
        tags: ['dinner','lunch','slowfood','biryani','nonveg'],
       },
       {
        id:3,
        name:'Haka Noddles',
        price:120,
        cookTime:'30-40',
        favorite:true,
        origins:['USA','India', 'itali'],
        star:3.0,
        imageUrl:'assets/9.jpg',
        tags: ['fastfood','starter','noodles','veg'],
       },
       {
        id:4,
        name:'Mutton Biryani',
        price:220,
        cookTime:'20-30',
        favorite:true,
        origins:['Pakistan','india', 'china'],
        star:4.7,
        imageUrl:'assets/Biryani.jpg',
        tags: ['biryani','Lunch','dinner','slowfood','nonveg'],
       },
       {
        id:5,
        name:'Chicken Kabab',
        price:400,
        cookTime:'40-45',
        favorite:false,
        origins:['itali', 'china'],
        star:4.5,
        imageUrl:'assets/kabab.jpg',
        tags: ['nonveg','lunch','kabab','dinner','slowfood'],
       },
       {
        id:6,
        name:'Fish Fry',
        price:240,
        cookTime:'30-45',
        favorite:false,
        origins:['india', 'china'],
        star:4.5,
        imageUrl:'assets/fish.jpg',
        tags: ['nonveg','dinner','lunch','fish','fry'],
       },
       {
        id:7,
        name:'Veg Biryani',
        price:250,
        cookTime:'35-45',
        favorite:true,
        origins:['Germany', 'china'],
        star:3.5,
        imageUrl:'assets/vegbiryani.jpg',
        tags: ['veg','lunch','dinner','biryani'],
       },
       {
        id:8,
        name:'veg Kolhapuri',
        price:180,
        cookTime:'40-45',
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'assets/vegKolhapuri.jpg',
        tags: ['veg','lunch','dinner','curry'],
       },
       {
        id:9,
        name:'Butter Paneer',
        price:200,
        cookTime:'30-35',
        favorite:true,
        origins:['india','Bangaladesh'],
        star:4.3,
        imageUrl:'assets/ButterPaneer.jpg',
        tags: ['veg','lunch','curry','dinner'],
       },
       {
        id:10,
        name:'Mutton',
        price:290,
        cookTime:'40-45',
        favorite:true,
        origins:['india','Pak','Dubai'],
        star:4.6,
        imageUrl:'assets/mutton.jpg',
        tags: ['nonveg','lunch','dinner','curry','slowfood'],
       },
       {
        id:11,
        name:'Rice',
        price:80,
        cookTime:'20-25',
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'assets/rice.jpg',
        tags: ['veg','lunch','dinner','rice'],
       },
       {
        id:12,
        name:'Naan',
        price:45,
        cookTime:'20-25',
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'assets/naan.jpg',
        tags: ['veg','lunch','naan','dinner'],
       },
       {
        id:13,
        name:'Butter Naan',
        price:40,
        cookTime:'10-15',
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'assets/naan2.jpg',
        tags: ['veg','lunch','naan','dinner'],
       },
       {
        id:14,
        name:'Veg Manturian',
        price:80,
        cookTime:'35-40',
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'assets/vegManturian.jpg',
        tags: ['veg','fastfood','starter'],
       },
       {
        id:15,
        name:'Veg Biryani',
        price:180,
        cookTime:'30-35',
        favorite:false,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/veggBiryani.jpg',
        tags: ['veg','lunch','dinner','slowfood','biryani'],
       },
       {
        id:16,
        name:'Margherita Pizza',
        price:240,
        cookTime:'30-35',
        favorite:false,
        origins:['india'],
        star:4.2,
        imageUrl:'assets/margherita.jpg',
        tags: ['veg','lunch','dinner','fastfood','pizza'],
       },
       {
        id:17,
        name:'Pepperoni Pizza',
        price:300,
        cookTime:'30-35',
        favorite:true,
        origins:['india','USA','Dubai'],
        star:4.5,
        imageUrl:'assets/pepperoniPizza.jpg',
        tags: ['veg','lunch','dinner','fastfood','pizza'],
       },
       {
        id:18,
        name:'Mozzerella Pizza',
        price:380,
        cookTime:'30-35',
        favorite:false,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/pizza.jpg',
        tags: ['veg','lunch','dinner','fastfood','pizza'],
       },
       {
        id:19,
        name:'Vegan Margherita Pizza',
        price:350,
        cookTime:'30-35',
        favorite:false,
        origins:['india','italian'],
        star:4.0,
        imageUrl:'assets/veganMargheritaPizza.jpg',
        tags: ['veg','lunch','dinner','fastfood','pizza'],
       },
       {
        id:20,
        name:'Vegetable Soup',
        price:80,
        cookTime:'30-35',
        favorite:false,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/veggieSoup.jpg',
        tags: ['veg','starter','soup'],
       },
       {
        id:21,
        name:'Tomato Soup',
        price:80,
        cookTime:'30-35',
        favorite:true,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/tomatoSoup.jpg',
        tags: ['veg','starter','soup'],
       },
       {
        id:22,
        name:'French Fries',
        price:80,
        cookTime:'20-25',
        favorite:false,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/frenchfries.jpg',
        tags: ['veg','starter','fastfood','fry'],
       },
       {
        id:23,
        name:'Pasta',
        price:120,
        cookTime:'20-25',
        favorite:false,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/pasta.jpg',
        tags: ['veg','fastfood','starter'],
       },
       {
        id:24,
        name:'Paneer Chilli',
        price:190,
        cookTime:'30-35',
        favorite:true,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/paneerChilli.JPG',
        tags: ['veg','lunch','dinner','starter'],
       },
       {
        id:25,
        name:'Mashroom Pepper Fry',
        price:200,
        cookTime:'30-35',
        favorite:true,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/mashroomPepperfry.jpg',
        tags: ['veg','fry','starter'],
       },
       {
        id:26,
        name:'Cheese Balls',
        price:140,
        cookTime:'30-35',
        favorite:true,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/cheeseBalls.jpg',
        tags: ['veg','fastfood','starter'],
       },
       {
        id:27,
        name:'KFC Fried Chicken',
        price:280,
        cookTime:'30-35',
        favorite:true,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/friedChicken.png',
        tags: ['nonveg','lunch','dinner','fry'],
       },
       {
        id:28,
        name:'Fish Fry',
        price:310,
        cookTime:'30-35',
        favorite:true,
        origins:['india'],
        star:4.0,
        imageUrl:'assets/fishFry.jpg',
        tags: ['nonveg','lunch','dinner','fry'],
       },
       {
        id:29,
        name:'Corn Soup',
        price:110,
        cookTime:'15-20',
        favorite:false,
        origins:['india'],
        star:4.3,
        imageUrl:'assets/cornSoup.jpg',
        tags: ['veg','starter','soup'],
       },
       {
        id:30,
        name:'Chicken Fry',
        price:220,
        cookTime:'25-30',
        favorite:false,
        origins:['india'],
        star:4.3,
        imageUrl:'assets/chickenFry.jpg',
        tags: ['nonveg','starter','fry'],
       },
       {
        id:31,
        name:'Masala Papad',
        price:90,
        cookTime:'15-20',
        favorite:true,
        origins:['india'],
        star:4.6,
        imageUrl:'assets/masalaPapad.jpg',
        tags: ['veg','starter'],
       },
       {
        id:32,
        name:'Egg Biryani',
        price:190,
        cookTime:'30-35',
        favorite:false,
        origins:['india'],
        star:3.9,
        imageUrl:'assets/eggBiryani.jpg',
        tags: ['nonveg','lunch','dinner','slowfood','biryani'],
       },
       {
        id:33,
        name:'Colddrink',
        price:60,
        cookTime:'0',
        favorite:true,
        origins:['india'],
        star:4.6,
        imageUrl:'assets/colddrink2.jpg',
        tags: ['veg','starter'],
       },
    ]
  }
}