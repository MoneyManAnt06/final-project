'use client';
import useHandlerUrlParams from '@/customHooks/searchInput';
import { FormEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default async function Input() {
  const { handlerStateParams } = useHandlerUrlParams();
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { value } = e.currentTarget['searchInput'];
    handlerStateParams({ search: value || '' });
  };

  return (
    <form onSubmit={handlerSubmit} className=" mx-auto max-w-full w-96">
      <div className="flex">
        <div className="relative w-full">
          <input
            name="searchInput"
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-tl-lg rounded-bl-lg"
            placeholder="Search For Items"
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
    </form>
  );
}
