export interface IProducts {
  id?: number;
  created_at?: Date;
  name: string;
  description: string;
  price: number;
  available: boolean;
  category_id: number;
}
