'use client';
import Link from 'next/link';

interface ICartFooterProps {
  subTotal: number;
  taxes: number;
  total: number;
}

export default function CartFooter({
  subTotal,
  taxes,
  total,
}: ICartFooterProps) {
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900 flex-col">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${taxes}</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
      <div className="mt-6">
        <Link
          href="/checkout"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </Link>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500"></div>
    </div>
  );
}
