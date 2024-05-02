'use server';
import { instanceAxios } from '@/utils/axiosconfig';
import { revalidatePath } from 'next/cache';

export default async function deleteCartDetails(product_id: number) {
  try {
    const {
      data: { body },
    } = await instanceAxios.delete(`/cart_detail/${product_id}`);
    revalidatePath('/cart_detail');
    return body.data;
  } catch (error) {}
  return [];
}
