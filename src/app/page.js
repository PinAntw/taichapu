"use client";

import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import { categories, products } from "./data/data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(""); // 控制手機選單選擇的分類

  // 滾動到指定的分類區塊
  const handleCategoryChange = (e) => {
    const targetId = e.target.value;
    setSelectedCategory(targetId);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="pt-32">
        <main className="p-8 bg-maincolor">

          {/* 手機模式的下拉式選單 */}
          <div className="md:hidden mb-4 px-4">
            <label className="block text-lg font-bold mb-2 text-black">選擇商品分類:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded text-black font-bold"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">請選擇分類</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          {/* Grid佈局：左側分類 + 右側商品 */}
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">

            {/* 左側分類欄（桌機模式顯示，手機隱藏） */}
            <aside className="hidden md:block bg-white p-4 rounded shadow-md h-fit sticky top-32">
              <h3 className="text-lg font-bold mb-2 text-black">商品分類</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="block text-gray-700 hover:text-fontofficial"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* 新增的圖片區塊 */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-black mb-2">掃描QRcode聯絡客服訂購</h3>
                <h3 className="text-center text-lg font-bold text-black mb-2">【富哥】LineID：jefflee614</h3>
                <img 
                  src="/qrcode.jpg" 
                  alt="推薦商品"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </aside>
            

            {/* 右側商品區塊 */}
            <section>
              {categories.map((category) => (
                <div key={category.id}>
                  <h3 id={category.id} className="text-xl font-bold mb-4 text-center text-black">
                    {`【${category.name}】`}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products
                      .filter((product) => product.category === category.id)
                      .map((product) => (
                        <ProductCard
                          key={product.id}
                          name={product.name}
                          price={product.price}
                          images={product.images}
                          description={product.description}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
