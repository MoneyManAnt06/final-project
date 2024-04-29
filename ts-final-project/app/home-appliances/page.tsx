import getAllProducts from '@/actions/products/getAll';
import CardList from '@/components/CardList';
import Layout from '@/components/Layout';
import { TParams } from '@/customHooks/searchInput';
import { getUser } from '@/utils/getUser';
import { redirect } from 'next/navigation';

export default async function Electronics({ searchParams }: TParams) {
  const retrieveProducts = await getAllProducts();
  const openCartString = searchParams.openCart;
  const user = await getUser();

  if (!user) {
    return redirect('/login');
  }
  return (
    <Layout isSearchInput isCartOpen={!!openCartString}>
      <CardList
        customClass="flex-wrap gap-8"
        filterCard={3}
        list={retrieveProducts}
        isButton
      />
    </Layout>
  );
}
