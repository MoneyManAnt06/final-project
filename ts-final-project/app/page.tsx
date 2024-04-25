import CardList from '@/components/CardList';
import { data } from './data/data';
import Layout from '@/components/Layout';

export default async function Index() {
  return (
    <>
      <Layout>
        <div className="Card-container w-full">
          <CardList listCard={data} />
        </div>
      </Layout>
    </>
  );
}
