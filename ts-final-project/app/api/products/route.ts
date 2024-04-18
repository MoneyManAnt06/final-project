import { createClient } from '@/utils/supabase/client';

export const GET = async () => {
  const supabase = createClient();

  let { data: products, error } = await supabase.from('products').select('*');

  return products;
};
