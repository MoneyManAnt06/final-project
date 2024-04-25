import getAllProducts from '@/actions/products/getAll';
import CardList from '@/components/CardList';
import Layout from '@/components/Layout';

export default async function Electronics() {
  const retrieveProducts = await getAllProducts();
  return (
    <Layout isSearchInput>
      <CardList
        customClass="flex-wrap gap-8"
        filterCard={3}
        list={retrieveProducts}
        isButton
      />
    </Layout>
  );
}
