import { IProducts } from './products';

export interface IProductDetail {
  products: IProducts;
  cart_id: number;
  quantity: number;
  id: number;
}
