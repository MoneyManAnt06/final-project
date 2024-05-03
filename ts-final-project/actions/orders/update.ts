'use server';
import { instanceAxios } from '@/utils/axiosconfig';

export default async function updateOrder(
  _prevState: string,
  formData: FormData
) {
  const order_status = formData.get('orderStatus') as string;
  const id = formData.get('order_id') as string;
  try {
    const {
      data: { body },
    } = await instanceAxios.patch(`/order/${id}`, { order_status });
    return body.data;
  } catch (error) {}
  return [];
}
