import React from 'react';
import Layout from '../Components/Layout';

import comp1 from "../Assets/BlogImages/comp1.jpeg";
import comp2 from "../Assets/BlogImages/comp2.jpeg";
import comp3 from "../Assets/BlogImages/comp3.jpeg";
import comp4 from "../Assets/BlogImages/comp4.jpeg";
import comp5 from "../Assets/BlogImages/comp5.jpeg";
import comp6 from "../Assets/BlogImages/comp6.jpeg";
import comp7 from "../Assets/BlogImages/comp7.jpeg";
import comp8 from "../Assets/BlogImages/comp8.jpeg";
import comp9 from "../Assets/BlogImages/comp9.jpeg";
import comp10 from "../Assets/BlogImages/comp10.jpeg";
import comp11 from "../Assets/BlogImages/comp11.jpeg";
import comp12 from "../Assets/BlogImages/comp12.jpeg";
import comp13 from "../Assets/BlogImages/comp13.jpeg";
import comp14 from "../Assets/BlogImages/comp14.jpeg";
import Header from '../Components/Header';

const images = [
  comp1, comp2, comp3, comp4, comp5, comp6, comp7, comp8, comp9,
  comp10, comp11, comp12, comp13, comp14
];

function Blogs() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <Header heading="Our Blog Gallery" showBackButton={true} />
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((imgSrc, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg group bg-gray-100">
              <img
                src={imgSrc}
                alt={`Blog Image ${index + 1}`}
                aria-hidden="true"
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-in-out will-change-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Blogs;
