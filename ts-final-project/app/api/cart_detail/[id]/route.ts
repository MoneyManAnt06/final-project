import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (_request: NextRequest, context: any) => {
  const supabase = createClient();

  const { params } = context;
  const { error } = await supabase
    .from('cart_details')
    .delete()
    .eq('id', params.id);

  return NextResponse.json({ status: 200, body: { data: true } });
};
