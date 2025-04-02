import React, { useState } from "react";

const Star = () => {
    const [rating, setRating] = useState(0); // User's selected rating
    const [hover, setHover] = useState(0); // Star hover effect

    return (
        <div className="flex flex-col items-center space-y-3 p-6 bg-white shadow-md rounded-lg w-72">
            <h2 className="text-lg font-semibold text-gray-700">Rate this Product</h2>
            
            <div className="flex space-x-2 text-3xl">
                {Array.from({ length: 5 }, (_, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer transition-all duration-300 
                        ${index < (hover || rating) ? "text-yellow-400 scale-110 drop-shadow-lg" : "text-gray-300"}`}
                        onClick={() => setRating(index + 1)}  // Click to set rating
                        onMouseEnter={() => setHover(index + 1)} // Hover effect
                        onMouseLeave={() => setHover(0)} // Reset hover effect
                    >
                        ★
                    </span>
                ))}
            </div>

            <p className="text-sm text-gray-600">{rating > 0 ? `You rated: ${rating}/5` : "Hover to rate"}</p>
        </div>
    );
};

export default Star;
