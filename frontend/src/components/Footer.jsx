import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-[#19191a] text-white py-2 fixed bottom-0 w-full">
      <div className="container mx-auto">        <div className="flex center items-center ">
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-white" title="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Add your Twitter SVG icon here */}
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" title="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Add your Facebook SVG icon here */}
              </svg>
            </a>
            {/* Add more social media icons as needed */}
          </div>
          <div className="flex items-center">
            <button
              className="bg-purple-300 hover:bg-purple-400 text-purple-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mr-4"
              type="button"
            >
              <Link to={"/Donate"}>Donate</Link>
            </button>
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              type="button"
            >
                
            <Link to={"/Contact"}>Contact us</Link>
          
            </button>
          
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
