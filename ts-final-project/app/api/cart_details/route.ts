import { createClient } from '@/utils/supabase/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: cart_details, error } = await supabase
    .from('cart_details')
    .select('*');

  return NextResponse.json({ status: 200, body: { data: cart_details } });
};
