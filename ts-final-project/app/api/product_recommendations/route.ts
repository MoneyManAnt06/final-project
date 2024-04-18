import { createClient } from '@/utils/supabase/client';

export const GET = async () => {
  const supabase = createClient();

  let { data: product_recommendations, error } = await supabase
    .from('product_recommendations')
    .select('*');

  return product_recommendations;
};
