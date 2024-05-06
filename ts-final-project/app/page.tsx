import CardList from '@/components/CardList';
import Layout from '@/components/Layout';
import { TParams } from '@/customHooks/searchInput';
import getAllCategories from '@/actions/categories/getAll';
import { ICategories } from '@/types/categories';
import { ICardProps } from '@/components/Card';

export default async function Index({ searchParams }: TParams) {
  const retrieveCategories = await getAllCategories();
  const openCartString = searchParams.openCart;

  const renderCategories = retrieveCategories.map((category) => {
    return {
      id: category.id,
      image: {
        alt: 'category iamge',
        height: 300,
        width: 300,
        src: category.image,
      },
      description: category.description,
      href: category.href,
    } as ICardProps;
  });

  return (
    <>
      <Layout isCartOpen={!!openCartString}>
        <div className="Card-container w-full">
          <CardList listCard={renderCategories} />
        </div>
      </Layout>
    </>
  );
}
