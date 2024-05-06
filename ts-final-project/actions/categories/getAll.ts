import { ICardProps } from '@/components/Card';
import { ICategories } from '@/types/categories';
import { IProducts } from '@/types/products';
import { instanceAxios } from '@/utils/axiosconfig';

export default async function getAllCategories(
  searchParam?: string | undefined
): Promise<ICategories[]> {
  try {
    const {
      data: { body },
    } = await instanceAxios.get(`/categories?search=${searchParam || ''}`);
    return body.data;
  } catch (error) {}
  return [];
}
