'use client';

import { IOrders } from '@/types/orders';

export interface ITableProps {
  list: IOrders[];
}

export default function Tabe({ list }: ITableProps) {
  const renderTr = () => {
    return list.map((item) => (
      <tr>
        <td>{item.id}</td>
        <td>{item.shipping_address}</td>
        <td>{`${item.created_at}`}</td>
        <td>{item.order_status}</td>
      </tr>
    ));
  };
  return (
    <div className="max-w-7xl w-full">
      <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th>ID</th>
            <th>Shipping Address</th>
            <th>Date</th>
            <th>Staus</th>
          </tr>
        </thead>
        <tbody>{renderTr()}</tbody>
      </table>
    </div>
  );
}
