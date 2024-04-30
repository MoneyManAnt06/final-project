import { IProducts } from '@/types/products';
import { instanceAxios } from '@/utils/axiosconfig';

export default async function getAllProducts(
  searchParam?: string | undefined
): Promise<IProducts[]> {
  try {
    const {
      data: { body },
    } = await instanceAxios.get(
      `${process.env.NEXT_PUBLIC_URL_BASE}/products?search=${searchParam || ''}`
    );
    return body.data;
  } catch (error) {}
  return [];
}
