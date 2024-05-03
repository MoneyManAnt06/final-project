import getAllProducts from '@/actions/products/getAll';
import CardList from '@/components/CardList';
import Layout from '@/components/Layout';
import { TParams } from '@/customHooks/searchInput';

export default async function RelatedProducts({ searchParams }: TParams) {
  const openCartString = searchParams.openCart;
  const searchString = searchParams.search;
  const retrieveProducts = await getAllProducts(searchString);

  return (
    <Layout isSearchInput isCartOpen={!!openCartString}>
      <>
        <h3 className="text-5xl mb-20">Things You Might Like</h3>
        <CardList
          customClass="flex-wrap gap-8"
          list={retrieveProducts}
          isButton
        ></CardList>
      </>
    </Layout>
  );
}
