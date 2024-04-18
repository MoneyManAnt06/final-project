import { createClient } from '@/utils/supabase/client';

export const GET = async () => {
  const supabase = createClient();

  let { data: shopping_carts, error } = await supabase
    .from('shopping_carts')
    .select('*');

  return shopping_carts;
};
