import getAllProducts from '@/actions/products/getAll';
import CardList from '@/components/CardList';
import Layout from '@/components/Layout';
import { TParams } from '@/customHooks/searchInput';

export default async function ProductPage({ searchParams }: TParams) {
  const openCartString = searchParams.openCart;
  const searchString = searchParams.search;
  const retrieveProducts = await getAllProducts(searchString);

  return (
    <Layout isSearchInput isCartOpen={!!openCartString}>
      <CardList
        customClass="flex-wrap gap-8"
        list={retrieveProducts}
        isButton
      ></CardList>
    </Layout>
  );
}
