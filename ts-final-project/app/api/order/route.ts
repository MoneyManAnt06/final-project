import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const supabase = createClient();

  const { data: orders, error } = await supabase
    .from('orders')
    .select()
    .order('id', { ascending: true })
    .limit(100);
  return NextResponse.json({ status: 200, body: { data: orders } });
};
