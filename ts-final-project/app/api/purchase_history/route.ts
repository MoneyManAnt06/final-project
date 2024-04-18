import { createClient } from '@/utils/supabase/client';

export const GET = async () => {
  const supabase = createClient();

  let { data: purchase_history, error } = await supabase
    .from('purchase_history')
    .select('*');

  return purchase_history;
};
