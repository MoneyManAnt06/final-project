import Image from 'next/image';
import { IImage } from '../Card';
import Button from '../Button';

interface IPropsCartDetails {
  itemName: string;
  price: number;
  quantity: number;
  image: IImage;
  isButton?: boolean;
}
export default function CartDetails({
  itemName,
  price,
  quantity,
  image,
  isButton,
}: IPropsCartDetails) {
  return (
    <div className="Cart-details flex text-black">
      <div className="Cart-details-image">
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
      </div>
      <div className="Cart-details-container w-full">
        <div className="flex justify-between">
          <h3 className="Cart-details-title">{itemName}</h3>
          <span className="Cart-details-price">
            <span>{`$${price}`}</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="Cart-details-quantity">
            Quantity <span>{quantity}</span>
          </span>
          {isButton && (
            <Button
              text="Remove"
              customClass="m-0 bg-slate-400 flex items-center text-slate-950 border-4 border-blue-500 rounded p-1 gap-1.5 hover:bg-white"
            ></Button>
          )}
        </div>
      </div>
    </div>
  );
}
