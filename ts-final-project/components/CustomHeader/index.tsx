import Link from 'next/link';
import AuthButton from '../AuthButton';
import Button from '../Button';
import Input from '../Input';
import { FaCartShopping } from 'react-icons/fa6';
import { FaStore } from 'react-icons/fa6';

interface ICustomHeaderProps {
  title: string;
}

export default function CustomHeader({ title = '' }: ICustomHeaderProps) {
  return (
    <div className="Custom-header flex items-center mx-auto w-10/12">
      <div className="flex gap-x-1.5">
        <FaStore className="Custom-header-icon text-3xl" />
        <h3 className="Custom-header-title text-3xl">{title}</h3>
      </div>
      <div className="Custom-header-tabs">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="checkout">CheckOut</Link>
      </div>
      <Input />
      <div className="flex-1 w-full flex flex-col gap-20 items-center max-w-48">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
            <Button
              customClass="Custom-header-button flex items-center gap-x-1"
              href="/"
              text="CART"
            >
              <FaCartShopping />
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
