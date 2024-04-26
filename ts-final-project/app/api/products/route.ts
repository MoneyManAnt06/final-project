import { createClient } from '@/utils/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const supabase = createClient();
  const search = req.nextUrl.searchParams.get('search') || '';

  console.log('where is the filter ***', search);

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })
    .like('name', `%${''}%`)
    .limit(100);
  console.log(error);
  return NextResponse.json({ status: 200, body: { data: products } });
};
