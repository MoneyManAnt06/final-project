import axios from 'axios';

export type axiosRest<T> = { status: number; body: { data: T } };

export const instanceAxios = axios.create();
