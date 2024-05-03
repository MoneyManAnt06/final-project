'use server';
import { orderStatusType, paymentMethodType } from '@/types/orders';
import { instanceAxios } from '@/utils/axiosconfig';
import { revalidatePath } from 'next/cache';

export default async function createOrderDetails(
  _prevState: string,
  formData: FormData
) {
  const total = formData.get('total') as string;
  const shipping_address = formData.get('shipping_address') as string;
  const payment_method: paymentMethodType = 'o las nalgas';
  const order_status: orderStatusType = 'pending';

  try {
    const {
      data: { body },
    } = await instanceAxios.post(`/orders`, {
      total,
      shipping_address,
      payment_method,
      order_status,
    });
    revalidatePath('/orders');
    return body.data;
  } catch (error) {}
  return [];
}
