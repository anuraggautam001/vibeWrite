import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">About</h2>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
        <p className="text-gray-700">
          We are dedicated to providing high-quality content and resources to help individuals learn
          and grow in their respective fields. Our mission is to empower and inspire through
          educational content that is accessible, informative, and engaging.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Our Team</h3>
        <p className="text-gray-700">
          Our team consists of passionate individuals who are experts in their domains and are
          committed to sharing their knowledge and insights. Together, we strive to create a
          platform that fosters learning and community collaboration.
        </p>
      </div>
    </div>
  );
};

export default About;
