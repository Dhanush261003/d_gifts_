"use client";

import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { frames } from '../data/frames';
import { toys } from '../data/toys';
import { combo } from '../data/combo';
import { others } from '../data/others';

const products = [...frames, ...toys, ...combo, ...others];
const categories = ["All", "Frames", "Toys", "Combo", "Others"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Frames");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const filteredProducts = useMemo(() => {
    let filtered = activeTab === "All" ? products : products.filter(product => product.category === activeTab);

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "low-to-high") {
      filtered = filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace("Rs.", "").replace(",", ""));
        const priceB = parseInt(b.price.replace("Rs.", "").replace(",", ""));
        return priceA - priceB;
      });
    } else if (sortOrder === "high-to-low") {
      filtered = filtered.sort((a, b) => {
        const priceA = parseInt(a.price.replace("Rs.", "").replace(",", ""));
        const priceB = parseInt(b.price.replace("Rs.", "").replace(",", ""));
        return priceB - priceA;
      });
    }

    return filtered;
  }, [activeTab, searchTerm, sortOrder]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex justify-between items-center w-full md:w-auto">
              <div className="flex items-center">
                <Image
                  src="/d_gifts_ logo.png"
                  alt="D_GIFTS_ Logo"
                  width={24}
                  height={24}
                  className="mr-1 md:mr-2 md:w-[30px] md:h-[30px]"
                />
                <span className="text-lg md:text-xl font-bold text-gray-800">D_GIFTS_</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4 md:hidden">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Sort</option>
                  <option value="low-to-high">Low-High</option>
                  <option value="high-to-low">High-Low</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-gray-500 block w-24 p-1 ps-6 bg-neutral-secondary-medium border border-default-medium text-heading text-xs rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  />
                  <svg
                    className="absolute left-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-1 rounded-md font-medium ${
                    activeTab === category
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4 md:justify-end w-full md:w-auto">
              <div className="hidden md:flex items-center space-x-4">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                >
                  <option value="">Sort by Price</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-gray-500 block w-full p-2 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:hidden space-x-4 py-2 border-t">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 py-1 text-sm rounded-md font-medium ${
                  activeTab === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className="pt-24 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-stone-900 font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-slate-950 font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-1">Price: {product.price}</p>
                <p className="text-gray-600">Packing: {product.packingCharges || 'Rs.'}</p>
                <p className="text-gray-600">Delivery: {product.deliveryCharges || 'Rs.'}</p>
                <a
                  href={`https://wa.me/918124474699?text=Hello, I am interested in buying ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white w-full py-2 rounded mt-2 block text-center hover:bg-blue-600"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
