import { FaUserPlus } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

export default function CheckoutForm() {
  return (
    <form className="mt-10">
      <div>
        <h3 className="text-lg font-bold text-[#333] mb-6">Personal Details</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="First Name"
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
            <FaUserPlus className="w-[18px] h-[18px] absolute right-4" />
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Last Name"
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
            <FaUserPlus className="w-[18px] h-[18px] absolute right-4" />
          </div>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />
            <FaRegEnvelope className="w-[18px] h-[18px] absolute right-4" />
          </div>
          <div className="relative flex items-center">
            <input
              type="number"
              placeholder="Phone No."
              className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
            />

            <FaPhoneAlt className="w-[18px] h-[18px] absolute right-4" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-bold text-[#333] mb-6">Shipping Address</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Address Line"
            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
          />
          <input
            type="text"
            placeholder="City"
            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
          />
        </div>
        <div className="flex gap-6 max-sm:flex-col mt-10">
          <button
            type="button"
            className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]"
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
          >
            Complete Purchase
          </button>
        </div>
      </div>
    </form>
  );
}
