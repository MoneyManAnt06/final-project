import getAllCartDetails from '@/actions/cartDetails/getAll';
import Cart from '../Cart';
import CustomHeader from '../CustomHeader';
import { IProductDetail } from '@/types/product_details';
export interface ILayout {
  children: React.ReactNode;
  isSearchInput?: boolean;
  isCartOpen?: boolean;
}

export default async function Layout({
  children = <></>,
  isSearchInput = false,
  isCartOpen = false,
}) {
  const cartData: IProductDetail[] = await getAllCartDetails();
  return (
    <>
      <CustomHeader isSearchInput={isSearchInput} title="Your Store" />
      {children}
      {isCartOpen && <Cart cartData={cartData} />}
    </>
  );
}
