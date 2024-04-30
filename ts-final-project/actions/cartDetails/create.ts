'use server';
import { instanceAxios } from '@/utils/axiosconfig';

export default async function createCartDetails(product_id: number) {
  try {
    const {
      data: { body },
    } = await instanceAxios.post(`/cart_details`, { product_id, quantity: 1 });
    return body.data;
  } catch (error) {}
  return [];
}
