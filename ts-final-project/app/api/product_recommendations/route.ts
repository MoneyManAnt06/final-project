import { createClient } from '@/utils/supabase/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = createClient();

  let { data: product_recommendations, error } = await supabase
    .from('product_recommendations')
    .select('*');

  return NextResponse.json({
    status: 200,
    body: { data: product_recommendations },
  });
};
