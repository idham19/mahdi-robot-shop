import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catolog',
  templateUrl: './catolog.component.html',
  styleUrls: ['./catolog.component.css']
})
export class CatologComponent {
 product:IProduct;

 constructor(){
  this.product={
    id:2,
    description:"a friendly robot head",
    name:"Friendly bot",
    imageName:"head-friendly.png",
    category:"Heads",
    price:945.0,
    discount:0.2
  }
 }
 getImageUrl(product:IProduct) {
   return '/assets/images/robot-parts/'+ product.imageName
 }
}
