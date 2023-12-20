import React from 'react';

const CardItems = () => {
  return (
    
    
     <div> <img src="/Capture d'écran 2023-12-04 170951.png" alt="Card Item 2" className="w-full h-100 mb-0 rounded" />
   
      <div className=" bg-white">
        {/* Image related to Card Item 1 */}
        { <img src="https://www.shutterstock.com/shutterstock/videos/1062413938/thumb/1.jpg?ip=x480" alt="Card Item 1" /> }
        
        <h3 className="text-lg font-semibold mb-2"></h3>
        <p className="text-gray-700">
          
           
      
        </p>
      </div>

      {/* Card Item 2 */}
      <div className="p-4 bg-gray-100 rounded">
        {/* Image related to Card Item 2 */}
        
      
        <p className="text-gray-700 font-serif w-[0.1] " >
          Dr.Asma just posted a new video!  
        </p>
      </div>

      {/* Add more card items as needed */}
    </div>
  );
};

export default CardItems;
