import getAllProducts from '@/actions/products/getAll';
import CardList from '@/components/CardList';
import Layout from '@/components/Layout';
import { TParams } from '@/customHooks/searchInput';

export default async function ProductPage({ searchParams }: TParams) {
  const searchString = searchParams.search;
  const retrieveProducts = await getAllProducts(searchString);
  return (
    <Layout isSearchInput>
      <CardList
        customclassName="flex-wrap gap-8"
        list={retrieveProducts}
        isButton
      ></CardList>
    </Layout>
  );
}
