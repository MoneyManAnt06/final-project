import { getUser } from '@/utils/getUser';
import Card, { ICardProps } from '../Card';
import { IProducts } from '@/types/products';
interface ICardList {
  list?: IProducts[];
  listCard?: ICardProps[];
  customClass?: string;
  filterCard?: categoryType;
  isButton?: boolean;
}

export type categoryType = 1 | 2 | 3;

export default async function CardList({
  list,
  customClass,
  filterCard,
  listCard,
  isButton = false,
}: ICardList) {
  const isUser = await getUser();

  const cardProps: ICardProps[] | undefined = list?.map((item) => {
    const newProps: ICardProps = {
      id: item.id!,
      description: item.description,
      title: item.name,
      image: {
        width: 300,
        src: item.image,
        height: 300,
        alt: 'No Image Found',
      },
      category: item.category_id as categoryType,
    };
    return newProps;
  });

  const renderCards = (listCard: ICardProps[]) => {
    return listCard
      .filter((card) => (filterCard ? card.category === filterCard : true))
      .map((card) => {
        return (
          <Card
            isButton={isButton}
            href={card.href}
            id={card.id}
            key={card.id}
            description={card.description}
            image={card.image}
            title={card.title}
            isUser={isUser}
          />
        );
      });
  };

  return (
    <div
      className={`${customClass} CardList flex w-9/12 mx-auto justify-evenly`}
    >
      {renderCards(cardProps || listCard || [])}
    </div>
  );
}
