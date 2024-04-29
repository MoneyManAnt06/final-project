import { createClient } from '@/utils/supabase/server';

export const getUser = async (): Promise<boolean> => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  return true;
};
