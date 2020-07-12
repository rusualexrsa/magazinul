import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rsa-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.sass']
})
export class ProductTileComponent implements OnInit {
  @Input() product: Product;


  constructor() { }

  ngOnInit(): void {
  }

}
