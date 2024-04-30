import { IProducts } from '@/types/products';
import { instanceAxios } from '@/utils/axiosconfig';

export default async function getAllProducts(
  searchParam?: string | undefined
): Promise<IProducts[]> {
  try {
    const {
      data: { body },
    } = await instanceAxios.get(`/products?search=${searchParam || ''}`);
    return body.data;
  } catch (error) {}
  return [];
}
