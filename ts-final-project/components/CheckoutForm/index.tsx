'use client';
import createOrderDetails from '@/actions/checkout/create';
import { useFormState } from 'react-dom';
export interface ICheckoutForm {
  total: number;
  isDisabledButton: boolean;
}

export default function CheckoutForm({
  total,
  isDisabledButton,
}: ICheckoutForm) {
  const [_state, action] = useFormState(createOrderDetails, {
    message: '',
  });

  return (
    <form action={action} className="mt-10">
      <div>
        <h3 className="text-lg font-bold text-[#333] mb-6">Card Details</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative flex items-center">
            <input
              required
              type="number"
              placeholder="Card number"
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <input
              required
              type="number"
              placeholder="EXP."
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <input
              required
              type="number"
              placeholder="CVV"
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <input
              required
              type="text"
              placeholder="Name of card holder"
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-[#333] mb-6">Shipping Address</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            required
            name="shipping_address"
            type="text"
            placeholder="Address Line"
            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
          />
          <input
            required
            type="text"
            placeholder="City"
            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
          />
          <input name="total" type="hidden" value={total} />
        </div>
        <div className="flex gap-6 max-sm:flex-col mt-10">
          <button
            disabled={isDisabledButton}
            type="submit"
            className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </form>
  );
}
