"use client";

import React, { useState } from 'react';
import 'animate.css';

const ActionButtons = () => {
    const [buyNowWobble, setBuyNowWobble] = useState(false);
    const [addToCartWobble, setAddToCartWobble] = useState(false);

    const handleBuyNowClick = () => {
        setBuyNowWobble(true);
        setTimeout(() => setBuyNowWobble(false), 1000); // 1s is typical for animate.css
    };

    const handleAddToCartClick = () => {
        setAddToCartWobble(true);
        setTimeout(() => setAddToCartWobble(false), 1000);
    };

    return (
        <div className="mt-8 flex gap-4">
            <button
                onClick={handleBuyNowClick}
                className={`flex-1 bg-linear-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-red-600 transition-all ${buyNowWobble ? 'animate__animated animate__wobble' : ''}`}
            >
                Buy Now
            </button>
            <button
                onClick={handleAddToCartClick}
                className={`flex-1 border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg hover:bg-orange-50 transition-all ${addToCartWobble ? 'animate__animated animate__wobble' : ''}`}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ActionButtons;