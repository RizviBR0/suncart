import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import React from 'react';

const AllProductsPage = async () => {
    const res = await fetch("https://suncart-pink.vercel.app/products.json");
    const products = await res.json();

    return (
        <div>
            <section>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl mt-6 mb-4">All Products</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {products.map((product) => (
                        <ProductCard key={product.id} item={product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AllProductsPage;