import React, { useState } from 'react';

export default function ProductCard({ key, product }) {
    const [showStores, setShowStores] = useState(false);

    return (
        <div
            key={key}
            className="card bg-white shadow-lg rounded-2xl mb-6 p-4"
        >
            <div>
                <h2 className="card-title text-xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-3">Marca: {product.brand}</p>
            </div>

            {product.variations.map((variation, idx) => {
                const priceDisplay =
                    variation.min_price === variation.max_price
                        ? `R$${variation.min_price.toFixed(2)}`
                        : `R$${variation.min_price.toFixed(2)} - R$${variation.max_price.toFixed(2)}`;

                return (
                    <div
                        key={idx}
                        className="mt-4 pt-4 border-t border-gray-300 flex gap-4"
                    >
                        {variation.image_url && (
                            <img
                                src={variation.image_url}
                                alt={variation.name}
                                className="w-24 h-24 object-contain rounded-xl"
                            />
                        )}
                        <div className="flex-1">
                            <p className="text-base font-medium text-gray-900">{variation.name}</p>
                            <p className="text-sm text-gray-700">
                                {variation.weight} {variation.measure}
                            </p>
                            <p className="text-base font-bold mt-1 text-gray-900">{priceDisplay}</p>

                            {showStores && (
                                <div className="flex overflow-x-auto gap-2 mt-3">
                                    {variation.stores.map((store, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                                        >
                                            🏬 {store}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* <button
                                onClick={() => addToCart(variation)}
                                className="mt-3 btn btn-sm btn-outline btn-primary"
                            >
                                Adicionar ao carrinho
                            </button> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}