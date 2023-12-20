import React from 'react';

const News = () => {
  return (
    <div className="bg-lilac p-8">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <div className="flex">
        <div className="w-1/2 pr-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">
              Tunis Hosts Arab Conference on Autism, December 20-21, 2023
            </h1>
            <p className="text-gray-700">
              A conference on "Autistic Children: Between Protection and Integration" will be organized on March 1-2, 2023, in Tunis by the Social Affairs Ministry, in partnership with the General Secretariat of the League of Arab States - Social Affairs Sector, Department of Development and Social Policies.
              The conference, which is in line with the implementation of Resolution No. 955 of the Council of Arab Social Affairs Ministers dated December 23, 2021, aims to encourage programs for autistic children through environmental and community development, capacity building, social awareness, and the creation of specialized institutions.
              The event will offer the opportunity to compare experiences between Arab countries in the management of people with autism spectrum disorders (intervention methods, therapeutic techniques, integration mechanisms, family and society awareness, legislative framework, etc.). (TAP)
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src="https://www.social.gov.tn/sites/default/files/2023-02/Fond%20de%20scene%207x3%20m.jpg"
            alt="News 2"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
