import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{
@Input() product!:IProduct;
@Output() handleAdd = new EventEmitter(); 
constructor(){ }
ngOnInit(): void {
}
addToCart(product:IProduct){
  this.handleAdd.emit(product) 
}
}
