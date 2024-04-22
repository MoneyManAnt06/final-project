import { ICardProps } from '@/components/Card';
import electronics from '@/images/electronics.png';
import beauty from '@/images/Beauty-products.png';
import appliances from '@/images/home-appliances.png';

export const data: ICardProps[] = [
  {
    id: 1,
    title: 'Electronics',
    image: {
      alt: 'First Product image',
      height: 300,
      src: electronics,
      width: 300,
    },
    description: '',
    href: '/electronics',
  },
  {
    id: 2,
    title: 'Beauty Product',
    image: {
      alt: 'second Product image',
      height: 300,
      src: beauty,
      width: 300,
    },
    description: '',
    href: '/beauty-products',
  },
  {
    id: 3,
    title: 'Home Appliances',
    image: {
      alt: 'third Product image',
      height: 300,
      src: appliances,
      width: 300,
    },
    description: '',
    href: '/home-appliances',
  },
];
