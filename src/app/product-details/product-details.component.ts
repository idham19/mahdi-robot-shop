import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catolog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
 
@Input() product!:IProduct
@Output() buy = new EventEmitter()

  buyButtonClicked(product:IProduct){
   this.buy.emit()
  }
  
 getImageUrl(product:IProduct) {
  return '/assets/images/robot-parts/'+ product.imageName
}

getDiscount(product:IProduct){
 return {'strikeThrought':product.discount>0}
}
}
