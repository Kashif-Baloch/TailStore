import React from 'react';

const ProductDetailForm = () => {
    return (
        <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="product-name" className="block text-gray-600 text-sm font-medium mb-2">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="product-name"
                        name="product-name"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Product Name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="product-description" className="block text-gray-600 text-sm font-medium mb-2">
                        Product Description
                    </label>
                    <textarea
                        id="product-description"
                        name="product-description"
                        rows="4"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Product Description"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="product-price" className="block text-gray-600 text-sm font-medium mb-2">
                        Price
                    </label>
                    <input
                        type="text"
                        id="product-price"
                        name="product-price"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Price"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="product-category" className="block text-gray-600 text-sm font-medium mb-2">
                        Category
                    </label>
                    <select
                        id="product-category"
                        name="product-category"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select Category</option>
                        <option value="clothing">Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="home-decor">Home Decor</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="product-image" className="block text-gray-600 text-sm font-medium mb-2">
                        Product Image
                    </label>
                    <input
                        type="file"
                        id="product-image"
                        name="product-image"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductDetailForm;