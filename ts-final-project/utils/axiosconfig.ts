import axios from 'axios';
import { createClient } from '@/utils/supabase/server';

export type axiosRest<T> = { status: number; body: { data: T } };

export const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BASE,
});

instanceAxios.interceptors.request.use(
  async (config) => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    config.headers['user-id'] = user?.id || '';
    return config;
  },
  (error) => Promise.reject(error)
);
