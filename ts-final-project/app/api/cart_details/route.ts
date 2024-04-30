import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: cart_details, error } = await supabase
    .from('cart_details')
    .select('*');

  return NextResponse.json({ status: 200, body: { data: cart_details } });
};

export const POST = async (request: NextRequest) => {
  const supabase = createClient();
  const cartDetailsData = await request.json();
  const user_id = await request.headers;
  // const test = await supabase.auth.getUser();

  // console.log(test);

  // const { data: cart_details, error } = await supabase
  //   .from('cart_details')
  //   .insert([{ ...cartDetailsData }])
  //   .select();

  return NextResponse.json({
    status: 200,
    body: { data: [] /*cart_details*/ },
  });
};

const getCreateCart = (userId: string) => {};
