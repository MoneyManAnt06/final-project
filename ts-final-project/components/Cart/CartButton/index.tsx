'use client';
import Button from '@/components/Button';
import useHandlerUrlParams from '@/customHooks/searchInput';
import { FaCartShopping } from 'react-icons/fa6';

export enum actionCart {
  OPEN = 'OPEN',
}

export default function CartButton() {
  const { handlerStateParams } = useHandlerUrlParams();
  const handlerClick = () => {
    handlerStateParams({ openCart: actionCart.OPEN || '' });
  };

  return (
    <button
      onClick={handlerClick}
      className="Custom-header-button flex items-center gap-x-1"
    >
      CART
      <FaCartShopping />
    </button>
  );
}
