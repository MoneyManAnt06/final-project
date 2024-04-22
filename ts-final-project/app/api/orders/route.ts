import { createClient } from '@/utils/supabase/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: orders, error } = await supabase.from('orders').select('*');
  return NextResponse.json({ status: 200, body: { data: orders } });
};
