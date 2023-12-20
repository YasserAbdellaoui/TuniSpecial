
import React from 'react'

const Contact = () => {
  return (
<div className="max-w-md mx-auto mt-32">
      <form className="bg-gray-100 shadow-md rounded px-8 py-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
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
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            rows="4"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-300 hover:bg-purple-400 text-purple-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact