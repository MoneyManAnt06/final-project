import { IProductDetail } from '@/types/product_details';
import { instanceAxios } from '@/utils/axiosconfig';

export default async function getAllCartDetails(): Promise<IProductDetail[]> {
  try {
    const {
      data: { body },
    } = await instanceAxios.get(`/cart_details`);
    return body.data;
  } catch (error) {}
  return [];
}
