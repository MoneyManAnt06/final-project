import getAllCartDetails from '@/actions/cartDetails/getAll';
import CartDetails from '@/components/CartDetails';
import CheckoutForm from '@/components/CheckoutForm';
import Layout from '@/components/Layout';
import { TParams } from '@/customHooks/searchInput';
import { IProductDetail } from '@/types/product_details';
import { Calculations } from '@/utils/calcForm';
import { getUser } from '@/utils/getUser';
import { redirect } from 'next/navigation';

export default async function Checkout({ searchParams }: TParams) {
  const openCartString = searchParams.openCart;
  const user = await getUser();
  if (!user) {
    return redirect('/login');
  }

  const list: IProductDetail[] = await getAllCartDetails();
  const renderCheckoutItems = () => {
    return list.map((item) => (
      <li>
        <CartDetails
          customClass="text-white"
          id={item.id}
          image={{ alt: '', height: 112, src: item.products.image, width: 160 }}
          price={item.products.price}
          itemName={item.products.name}
          quantity={item.quantity}
        ></CartDetails>
      </li>
    ));
  };

  const calcCheckout = Calculations(list).calcTotal;

  return (
    <Layout isCartOpen={!!openCartString}>
      <>
        <div className="font-[sans-serif] bg-gray-50">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
            <div className="bg-[#3f3f3f] lg:h-screen lg:sticky lg:top-0">
              <div className="relative h-full">
                <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
                  <h2 className="text-2xl font-bold text-white">
                    Order Summary
                  </h2>
                  <ul className="space-y-6 mt-10">
                    <>{renderCheckoutItems()}</>
                  </ul>
                </div>
                <div className="absolute left-0 bottom-0 bg-[#444] w-full p-4">
                  <h4 className="flex flex-wrap gap-4 text-base text-white">
                    Total + tax <span className="ml-auto">{calcCheckout}</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
              <h2 className="text-2xl font-bold text-[#333]">
                Complete your order
              </h2>
              <CheckoutForm />
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
