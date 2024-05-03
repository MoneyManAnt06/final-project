import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const PATCH = async (request: NextRequest, context: any) => {
  const supabase = createClient();
  const { params } = context;
  const orderData = await request.json();
  const order_status = orderData.order_status;

  console.log(order_status, params.id);

  const { data, error } = await supabase
    .from('orders')
    .update({ order_status })
    .eq('id', params.id)
    .select();

  return NextResponse.json({
    status: 200,
    body: { data },
  });
};
