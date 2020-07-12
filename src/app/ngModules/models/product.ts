import { Image } from './image';

export interface Product {
  id: string;
  title: string;
  price: number;
  images: Image[];
}
