import { createClient } from '@/utils/supabase/client';

export const GET = async () => {
  const supabase = createClient();

  let { data: orders, error } = await supabase.from('orders').select('*');
  return orders;
};
