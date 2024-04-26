import Image from 'next/image';
import { IImage } from '../Card';

interface ICartDetails {
  itemName: string;
  price: number;
  quantity: number;
  image: IImage;
}
export default function CartDetails({
  itemName,
  price,
  quantity,
  image,
}: ICartDetails) {
  return (
    <div className="Cart-details">
      <div className="Cart-details-image">
        <Image
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
      </div>
      <div className="Cart-details-container">
        <h3 className="Cart-details-title">{itemName}</h3>
        <span className="Cart-details-quantity">
          Quantity <span>{quantity}</span>
        </span>
        <span className="Cart-details-price">
          Total price <span>{price}</span>
        </span>
      </div>
    </div>
  );
}
