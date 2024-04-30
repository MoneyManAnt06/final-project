import axios from 'axios';
import { createClient } from '@/utils/supabase/client';

export type axiosRest<T> = { status: number; body: { data: T } };

export const instanceAxios = axios.create();

axios.interceptors.request.use(
  async function (config) {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    config.headers.set('user-id', user?.id);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
