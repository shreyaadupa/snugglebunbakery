import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';



const ROWS_HEIGHT: { [id:number]: number} = { 1: 400, 3: 335, 4:350};

@Component({
  selector: 'app-home', // The component's CSS element selector
  templateUrl: './home.component.html', // The location of the template file for this component
  styleUrls: [] // The location of the styles for this component
})
export class HomeComponent implements OnInit {
  // Component logic goes here
cols = 3;
category: string | undefined;
rowHeight = ROWS_HEIGHT[this.cols];

  constructor(private cartService: CartService){

  }
  ngOnInit(): void {

  }

  onColumnsCountChange(colsNum: number): void
  {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string):void
  {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {

    this.cartService.addToCart({
      product: product.image, 
      name: product.title, 
      price: product.price, 
      quantity: 1,
      id: product.id
    });
  }
}
