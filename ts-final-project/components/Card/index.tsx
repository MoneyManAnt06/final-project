import Image from 'next/image';
import Link from 'next/link';

export interface ICardProps {
  title: string;
  description?: string;
  image: IIamge;
  id: number;
  href: string;
}
export interface IIamge {
  src: any;
  alt: string;
  height: number;
  width: number;
}

export default function Card({
  image,
  title = '',
  description = '',
  href = '',
}: ICardProps) {
  return (
    <Link href={href}>
      <div className="Card">
        <h3 className="Card-title text-2xl">{title}</h3>
        <Image
          className="Card-image h-80"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        <p className="Card-text">{description}</p>
      </div>
    </Link>
  );
}
