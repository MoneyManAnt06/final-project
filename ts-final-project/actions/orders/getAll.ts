import { IOrders } from '@/types/orders';
import { instanceAxios } from '@/utils/axiosconfig';

export default async function getAllOrders(): Promise<IOrders[]> {
  try {
    const {
      data: { body },
    } = await instanceAxios.get(`/orders`);
    return body.data;
  } catch (error) {}
  return [];
}
