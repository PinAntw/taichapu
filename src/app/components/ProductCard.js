"use client";

import React, { useState } from "react";
import Image from "next/image";

function ProductCard({ name, price, images, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const nextImage = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

  const prevImage = () =>
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  return (
    <div>
      <div className="bg-white rounded shadow p-4 text-center">
        <div className="w-60 h-60 mx-auto overflow-hidden rounded">
          <Image
            src={images[0]}
            alt={name}
            width={240}
            height={240}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-lg font-semibold text-black">{name}</h4>
        <div className="text-blue-500 font-bold">{price}</div>
        <button
          onClick={toggleModal}
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
        >
          查看詳情
        </button>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-6 rounded shadow-lg flex flex-col md:flex-row overflow-y-auto"
            style={{
              width: "90%",
              maxWidth: "800px",
              height: "auto",
              maxHeight: "90%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-2/3 md:w-1/2 md:h-3/4 overflow-hidden rounded">
              <Image
                src={images[currentImageIndex]}
                alt={`${name} - ${currentImageIndex + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                ▶
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-between overflow-y-auto">
              <div>
                <h2 className="text-xl font-bold mb-4 text-black">{name}</h2>
                <div className="text-gray-700 mb-4">價格: {price}</div>
                <div className="text-gray-700 mb-4">{description}</div>
              </div>
              <button
                onClick={toggleModal}
                className="mt-2 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 self-end"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
