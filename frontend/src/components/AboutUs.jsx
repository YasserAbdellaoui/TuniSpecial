import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                {/* Place an image related to your organization */}
                { <img src="https://media.npr.org/assets/img/2018/03/19/autism-and-race_wide-49cd959c04211be1e41167f78015ed4a1d9bcada-s1400-c100.jpeg" /> }

                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700">
                    {/* Add a brief description about your organization */}
                    Welcome to our organization. We are dedicated to link between
                     autistic individuals and professionals to create a bright community</p>

                {/* Card Item 1 */}
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    {/* Image related to the first card item */}
                    { <img src="https://www.parents.com/thmb/qW-RcWNyCaitq3sGL6uQ0kelW4U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-GettyImages-1471775385-d89f1afe494d4249b9258d9eede03594.jpg" /> }

                    <h3 className="text-lg font-semibold mb-2">Our Purpose</h3>
                    <p className="text-gray-700">
                        {/* Description of the first card item */}
                        We create a bridge towards more knowledge about autism through learning videos and conferences
                    </p>
                </div>

                {/* Card Item 2 */}
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    {/* Image related to the second card item */}
                    {<img src="https://masterbundles.com/wp-content/uploads/2023/07/speech-therapist_madterbundles-3-911.jpg" /> }

                    <h3 className="text-lg font-semibold mb-2">Card Item 2</h3>
                    <p className="text-gray-700">
                        {/* Description of the second card item */}
                        This is a brief description of Card Item 2.
                    </p>
                </div>

                {/* Add more card items as needed */}

                {/* Place additional images or content here */}
            </div>
        </div>
    );
};

export default AboutUs;
