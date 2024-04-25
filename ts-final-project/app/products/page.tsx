import getAllProducts from '@/actions/products/getAll';
import { ICardProps } from '@/components/Card';
import CardList from '@/components/CardList';
import Layout from '@/components/Layout';

export default async function ProductPage() {
  const retrieveProducts = await getAllProducts();
  return (
    <Layout isSearchInput>
      <CardList
        customClass="flex-wrap gap-8"
        list={retrieveProducts}
      ></CardList>
    </Layout>
  );
}
