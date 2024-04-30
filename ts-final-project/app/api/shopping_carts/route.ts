import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: shopping_carts, error } = await supabase
    .from('shopping_carts')
    .select('*');

  return NextResponse.json({ status: 200, body: { data: shopping_carts } });
};
