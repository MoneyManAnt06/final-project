import { createClient } from '@/utils/supabase/client';

export const GET = async () => {
  const supabase = createClient();

  let { data: cart_details, error } = await supabase
    .from('cart_details')
    .select('*');

  return cart_details;
};
