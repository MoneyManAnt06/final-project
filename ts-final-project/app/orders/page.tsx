import getAllOrders from '@/actions/orders/getAll';
import Layout from '@/components/Layout';
import Table from '@/components/Table';
import { TParams } from '@/customHooks/searchInput';
import { getUser } from '@/utils/getUser';
import { redirect } from 'next/navigation';

export default async function Orders({ searchParams }: TParams) {
  const openCartString = searchParams.openCart;
  const user = await getUser();

  if (!user) {
    return redirect('/login');
  }

  const retrieveOrders = await getAllOrders();
  return (
    <Layout isSearchInput isCartOpen={!!openCartString}>
      <Table list={retrieveOrders} />
    </Layout>
  );
}
