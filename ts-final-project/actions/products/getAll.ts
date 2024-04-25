import { IProducts } from '@/types/products';
import { axiosRest, instanceAxios } from '@/utils/axiosconfig';
import axios from 'axios';

export default async function getAllProducts(
  searchParam?: string | undefined
): Promise<IProducts[]> {
  try {
    const {
      data: { body },
    } = await axios.get(
      `http://localhost:3000/api/products?search=${searchParam}`
    );
    return body.data;
  } catch (error) {}
  return [];
}
