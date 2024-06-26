export interface IOrders {
  id?: number;
  created_at?: Date;
  user_id: number;
  cart_id: number;
  total: number;
  shipping_address: string;
  payment_method: number;
  order_status: orderStatusType;
}

export type orderStatusType = 'pending' | 'processed' | 'shipped' | 'delivered';

export type paymentMethodType = 'cash' | 'card' | 'o las nalgas';
