import React from 'react';

function Events() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>

      <div className="flex mb-8">
        <div className="w-1/3 mr-4">
          <div className="bg-lilac-200 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Conference on Autism</h2>
            <p>
              Join us for a conference on autism scheduled for December 20-21, 2023, in Tunis. The event aims to encourage programs for autistic children through environmental and community development, capacity building, and more.
            </p>
          </div>
        </div>

        <div className="w-1/3 mr-4">
          <div className="bg-lilac-200 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Monthly Meeting</h2>
            <p>
              Our monthly meeting is scheduled for December 23-24, 2023. We will discuss various topics related to autism spectrum disorders, intervention methods, therapeutic techniques, and integration mechanisms.
            </p>
          </div>
        </div>

        <div className="w-1/3">
          <div className="bg-lilac-200 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Community Event</h2>
            <p>
              Don't miss our upcoming community event. We'll raise awareness about autism, share experiences, and discuss the legislative framework for supporting individuals with autism spectrum disorders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
