export interface IOrders {
  user_id: number;
  cart_id: number;
  total: number;
  shipping_address: string;
  payment_method: number;
  order_status: string;
}
