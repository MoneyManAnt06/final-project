import { IProducts } from './products';

export interface IProductDetail {
  product: IProducts;
  cart_id: number;
  quantity: number;
}
