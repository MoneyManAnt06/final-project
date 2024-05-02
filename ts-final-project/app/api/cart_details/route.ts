import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: cart_details, error } = await supabase
    .from('cart_details')
    .select('products(id, name, image, price), cart_id, quantity, id');

  return NextResponse.json({ status: 200, body: { data: cart_details } });
};

export const POST = async (request: NextRequest) => {
  const supabase = createClient();
  const cartDetailsData = await request.json();
  const user_id = (await request.headers.get('user-id')) || '';

  const cart_id = await getCreateCart(user_id);
  if (!cart_id) {
    return NextResponse.json({
      status: 500,
      body: { data: 'error at obtaining cart_id' /*cart_details*/ },
    });
  }

  const { data: cart_details, error } = await supabase
    .from('cart_details')
    .insert([{ ...cartDetailsData, cart_id }])
    .select();

  return NextResponse.json({
    status: 200,
    body: { data: cart_details },
  });
};

const getCreateCart = async (user_id: string): Promise<number> => {
  const supabase = createClient();

  if (!user_id) {
    return 0;
  }

  let { data: shopping_carts, error } = await supabase
    .from('shopping_carts')
    .select('*')
    .eq('user_id', user_id)
    .single();

  if (!shopping_carts) {
    const { data, error } = await supabase
      .from('shopping_carts')
      .insert([{ user_id }])
      .select()
      .single();

    return data.id;
  }

  return shopping_carts.id;
};
