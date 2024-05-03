import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: orders, error } = await supabase.from('orders').select('*');
  return NextResponse.json({ status: 200, body: { data: orders } });
};

export const POST = async (request: NextRequest) => {
  const supabase = createClient();
  const orderDetailsData = await request.json();
  const user_id = (await request.headers.get('user-id')) || '';
  const cart_id = await getCart(user_id);

  const { data: orders, error } = await supabase
    .from('orders')
    .insert([{ ...orderDetailsData, user_id, cart_id }])
    .select();

  return NextResponse.json({
    status: 200,
    body: { data: orders },
  });
};

const getCart = async (user_id: string): Promise<number> => {
  const supabase = createClient();

  if (!user_id) {
    return 0;
  }

  const { data: shopping_carts, error } = await supabase
    .from('shopping_carts')
    .select('*')
    .eq('user_id', user_id)
    .single();

  return shopping_carts.id;
};
