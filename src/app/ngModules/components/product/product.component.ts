import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rsa-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  product: Product = {
    id: '1',
    title: 'sandale',
    price: 999,
    images: [
      { image_link: 'https://s.cdnmpro.com/672000647/p/l/7/sandale-rebeca-aurii~3547.jpg' },
      { image_link: 'https://s.cdnmpro.com/672000647/p/l/4/sandale-alegria~3444.jpg' }
    ]
  };

  constructor() { console.log(this.product.images)}

  ngOnInit(): void {
  }

}
