import { IProductDetail } from '@/types/product_details';

interface ICalculations {
  calcSubTotal: number;
  calcTotal: number;
  calcTaxes: number;
}
export const Calculations = (cartData: IProductDetail[]): ICalculations => {
  const calcSubTotal = cartData.reduce(
    (acc, currentValue) => {
      acc.subTotal += currentValue.products.price;

      return acc;
    },
    { subTotal: 0 } as { subTotal: number }
  ).subTotal;

  const calcTaxes = calcSubTotal * 0.15;

  const calcTotal = calcSubTotal + calcTaxes;

  return {
    calcSubTotal,
    calcTotal,
    calcTaxes,
  };
};
