interface ICardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({ title = '', description }: ICardProps) {
  return <div>Card</div>;
}
