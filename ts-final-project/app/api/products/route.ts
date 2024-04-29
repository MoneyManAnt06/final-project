import { createClient } from '@/utils/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const supabase = createClient();
  const search: string = req.nextUrl.searchParams.get('search') || '';
  console.log(search);

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })
    .ilike('name', `%${search}%`)
    .limit(100);
  return NextResponse.json({ status: 200, body: { data: products } });
};
