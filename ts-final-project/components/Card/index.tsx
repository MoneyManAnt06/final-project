'use client';
import Image from 'next/image';
import Link from 'next/link';
import { categoryType } from '../CardList';
import { FaCartShopping } from 'react-icons/fa6';
import createCartDetails from '@/actions/cartDetails/create';
import { toast } from 'react-toastify';

export interface ICardProps {
  title?: string;
  description?: string;
  image: IImage;
  id: number;
  href?: string;
  category?: categoryType;
  isButton?: boolean;
  isUser?: boolean;
}
export interface IImage {
  src: string;
  alt: string;
  height: number;
  width: number;
}

export default function Card({
  id,
  image,
  title = '',
  description = '',
  href = '',
  isButton,
  isUser = false,
}: ICardProps) {
  const handleClick = async () => {
    await createCartDetails(id);
    toast.success('Your item has been added to the cart');
  };

  const addToCartValidation = isButton && isUser;

  return (
    <>
      {addToCartValidation ? (
        <div className="Card max-w-80 bg-sky-950 py-2.5 px-4">
          <h3 className="Card-title text-2xl text-center mb-2">{title}</h3>
          <Image
            className="Card-image h-80"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <p className="Card-text truncate">{description}</p>
          {addToCartValidation && (
            <button
              onClick={handleClick}
              className=" z-10 mx-auto bg-slate-400 flex items-center text-slate-950 border-4 border-blue-500 rounded p-1 gap-1.5 hover:bg-white"
            >
              Add To Cart
              <FaCartShopping className="text-xl" />
            </button>
          )}
        </div>
      ) : (
        <Link href={href}>
          <div className="Card max-w-80 bg-sky-950 py-2.5 px-4">
            <h3 className="Card-title text-2xl text-center mb-2">{title}</h3>
            <Image
              className="Card-image h-80"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
            <p className="Card-text truncate">{description}</p>
            {addToCartValidation && (
              <button
                onClick={handleClick}
                className=" z-10 mx-auto bg-slate-400 flex items-center text-slate-950 border-4 border-blue-500 rounded p-1 gap-1.5 hover:bg-white"
              >
                Add To Cart
                <FaCartShopping className="text-xl" />
              </button>
            )}
          </div>
        </Link>
      )}
    </>
  );
}
