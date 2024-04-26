import Cart from '../Cart';
import CustomHeader from '../CustomHeader';
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
  return (
    <>
      <CustomHeader isSearchInput={isSearchInput} title="Your Store" />
      {children}
      {isCartOpen && <Cart />}
    </>
  );
}
