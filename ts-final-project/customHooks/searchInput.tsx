import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export type TQueryParam = {
  [key in string]: string;
};

export default function useHandlerUrlParams() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const { replace } = useRouter();

  const handlerStateParams = (status: TQueryParam) => {
    for (const key in status) {
      const value = status[key];

      if (value) params.set(key, value);
      else params.delete(key);
    }

    replace(`${pathName}?${params.toString()}`);
  };

  return {
    handlerStateParams,
  };
}
