import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: purchase_history, error } = await supabase
    .from('purchase_history')
    .select('*');

  return NextResponse.json({ status: 200, body: { data: purchase_history } });
};
