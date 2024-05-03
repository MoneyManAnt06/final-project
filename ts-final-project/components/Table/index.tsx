'use client';
import updateOrder from '@/actions/orders/update';
import { IOrders } from '@/types/orders';
import { useFormState } from 'react-dom';

export interface ITableProps {
  list: IOrders[];
}

export default function Table({ list }: ITableProps) {
  const [_state, action] = useFormState(updateOrder, {
    message: '',
  });
  const orderStatus: string[] = [
    'pending',
    'processing',
    'shipped',
    'delivered',
  ];

  const renderOptions = (selectedStatus: string) => {
    return orderStatus.map((status) => (
      <option key={status} value={status} selected={status === selectedStatus}>
        {status}
      </option>
    ));
  };

  const renderTr = () => {
    return list.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.shipping_address}</td>
        <td>{`${item.created_at}`}</td>
        <td>{item.order_status}</td>
        <td>
          <form action={action} className="max-w-sm mx-auto">
            <input name="order_id" type="hidden" value={item.id} />
            <div className="flex items-center gap-2">
              <select
                name="orderStatus"
                defaultValue={item.order_status}
                onChange={() => {}}
                id="small"
                className=" mb-0 block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {renderOptions(item.order_status)}
              </select>
              <button type="submit">Save</button>
            </div>
          </form>
        </td>
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
