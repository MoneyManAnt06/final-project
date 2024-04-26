'use client';
import useHandlerUrlParams from '@/customHooks/searchInput';

export default function CartButtonClose() {
  const { handlerStateParams } = useHandlerUrlParams();
  const handlerClick = () => {
    handlerStateParams({ openCart: '' });
  };

  return (
    <button
      onClick={handlerClick}
      className="Custom-header-button flex items-center gap-x-1"
    >
      Close
    </button>
  );
}
