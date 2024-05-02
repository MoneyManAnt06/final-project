import { IProductDetail } from '@/types/product_details';
import CartDetails from '../CartDetails';
import CartButtonClose from './CartButtonClose';
import CartFooter from './CartFooter';
import { Calculations } from '@/utils/calcForm';

interface ICartProps {
  cartData: IProductDetail[];
}

export default function Cart({ cartData }: ICartProps) {
  const renderCardDetails = () => {
    return cartData.map((item) => (
      <CartDetails
        id={item.id}
        key={`${item.products.id} ${item.products.name}`}
        isButton
        image={{
          alt: 'Cart Image',
          height: 96,
          width: 96,
          src: item.products.image,
        }}
        itemName={item.products.name}
        price={item.products.price}
        quantity={item.quantity}
      />
    ));
  };
  const calcs = Calculations(cartData);
  return (
    <div
      className="relative z-10 transition-all"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between text-black">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <CartButtonClose />
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {renderCardDetails()}
                      </ul>
                    </div>
                  </div>
                </div>

                <CartFooter
                  total={calcs.calcTotal}
                  taxes={calcs.calcTaxes}
                  subTotal={calcs.calcSubTotal}
                ></CartFooter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
