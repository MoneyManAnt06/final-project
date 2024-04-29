import CardList from '@/components/CardList';
import { data } from './data/data';
import Layout from '@/components/Layout';
import { TParams } from '@/customHooks/searchInput';

export default async function Index({ searchParams }: TParams) {
  const openCartString = searchParams.openCart;
  return (
    <>
      <Layout isCartOpen={!!openCartString}>
        <div className="Card-container w-full">
          <CardList listCard={data} />
        </div>
      </Layout>
    </>
  );
}
