import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const supabase = createClient();

  const { data: categories, error } = await supabase
    .from('categories')
    .select('*, image')
    .limit(100);
  return NextResponse.json({ status: 200, body: { data: categories } });
};
