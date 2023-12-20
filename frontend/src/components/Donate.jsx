// Donate.jsx
import React from 'react';

const Donate = () => {
  return (
    <div className="flex">
    <img
      className="w-1/2"
      src="https://www.cybershield.ong/files/images/make-difference.png.webp"
      alt="Donation"
    />
    <div className="max-w-md mx-auto mt-16 ">
      <form className="bg-gray-100 shadow-md rounded px-8 py-1">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="amount">
            Donation Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            min="1"
            placeholder="Enter amount in TND"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Full Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="expiryDate">
              Expiry Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiryDate"
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="123"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            Message (Optional)
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Leave a message..."
            rows="2"
          />
        </div>
        <div className="flex items-stretch justify-center">
          <button
            className="bg-purple-400 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Donate Now
          </button>
        </div>
      </form>
      
    </div>
    </div>
    
  );
};

export default Donate;
