import Link from 'next/link';
import Card, { ICardProps } from '../Card';

interface ICardList {
  list: ICardProps[];
}

export default function CardList({ list }: ICardList) {
  const renderCards = () => {
    return list.map((card) => {
      return (
        <Card
          href={card.href}
          id={card.id}
          key={card.id}
          description={card.description}
          image={card.image}
          title={card.title}
        />
      );
    });
  };

  return (
    <div className="CardList flex w-9/12 mx-auto justify-evenly">
      {renderCards()}
    </div>
  );
}
