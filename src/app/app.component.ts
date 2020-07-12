import { Component } from '@angular/core';
import { Product } from './ngModules/models/product';
import { products } from './ngModules/mock/products-mock';

@Component({
  selector: 'rsa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  products: Product[] = products;
}
