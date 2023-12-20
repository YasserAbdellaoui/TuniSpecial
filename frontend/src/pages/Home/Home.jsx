import React from 'react';
import CardItems from '../../components/CardItems';
import VideoForm from '../../components/VideoForm';
import AboutUs from '../../components/AboutUs';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
  
 
    return (
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navbar */}
        <div className=" text-white p-16">
          <Navbar />
        </div>
  
        {/* Content */}
        <div className="flex-1 flex flex-wrap overflow-hidden">
          <div className="w-full md:w-1/3">
            {/* AboutUs Component on the left taking 1/3 width */}
            <AboutUs />
          </div>
          <div className="w-full md:w-2/3 pl-4">
            {/* Rest of the page (2/3 width) */}
            <h1 className="text-4xl font-medium mb-8 text-black" >
              Welcome to 
        
            </h1>
            <CardItems />
            <VideoForm />
          </div>
        </div>
  
        {/* Footer */}
        <div className="mt-auto bg-gray-800 text-white p-4">
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Home;