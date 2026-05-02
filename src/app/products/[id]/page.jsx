import React from 'react';
import Image from 'next/image';
import { FaStar, FaHeart, FaCheckCircle, FaTag, FaBoxOpen } from 'react-icons/fa';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://suncart-pink.vercel.app/products.json');
    const products = await res.json();

    const expectedProduct = products.find(p => p.id == id);

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side - Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center aspect-square shadow-sm">
                    <Image
                        width={400}
                        height={400}
                        src={expectedProduct.image}
                        alt={expectedProduct.name}
                        className="w-full h-full object-cover"
                        unoptimized
                    />
                </div>

                {/* Right Side - Details */}
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl md:text-4xl text-gray-800">{expectedProduct.name}</h1>
                    <p className="text-sm text-gray-500 mt-2">by <span className="text-orange-500 font-semibold">{expectedProduct.brand}</span></p>

                    <div className="flex items-center gap-1 mt-3 text-orange-400">
                        <FaStar />
                        <span className="text-sm text-gray-600 ml-2 font-medium">{expectedProduct.rating} Rating</span>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <span className="text-3xl font-bold text-orange-500">${expectedProduct.price.toFixed(2)}</span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                            <FaCheckCircle className="text-green-500" />
                            <span>In Stock: {expectedProduct.stock}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                            <FaTag className="text-blue-500" />
                            <span>{expectedProduct.category}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                            <FaBoxOpen className="text-orange-500" />
                            <span>ID: {expectedProduct.id}</span>
                        </div>
                    </div>

                    <p className="text-gray-600 mt-8 leading-relaxed h-full">
                        {expectedProduct.description}
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-red-600 transition-all">
                            Buy Now
                        </button>
                        <button className="flex-1 border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg hover:bg-orange-50 transition-all">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;