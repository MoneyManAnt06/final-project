import Link from 'next/link';
import AuthButton from '../AuthButton';
import Input from '../Input';
import { FaStore } from 'react-icons/fa6';
import CartButton from '../Cart/CartButton';
import { getUser } from '@/utils/getUser';
import getAllCartDetails from '@/actions/cartDetails/getAll';

interface ICustomHeaderProps {
  title: string;
  isSearchInput: boolean;
}

export default async function CustomHeader({
  title = '',
  isSearchInput,
}: ICustomHeaderProps) {
  const user = await getUser();

  return (
    <div className="Custom-header justify-between gap-5 mb-24 flex items-center mx-auto w-10/12">
      <div className="flex gap-x-3.5">
        <FaStore className="Custom-header-icon text-3xl" />
        <h3 className="Custom-header-title text-3xl">{title}</h3>
      </div>
      <div className="Custom-header-tabs flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">CheckOut</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/relatedProducts">Related Products</Link>
      </div>
      {isSearchInput && <Input />}
      <div className="flex-1 w-full flex flex-col gap-20 items-center max-w-48">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex items-center p-3 text-sm justify-center">
            <AuthButton />
            {user && <CartButton />}
          </div>
        </nav>
      </div>
    </div>
  );
}
