import { createClient } from '@/utils/supabase/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  const { data: products, error } = await supabase.from('products').select('*');

  return NextResponse.json({ status: 200, body: { data: products } });
};
