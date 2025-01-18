"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderCus() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); // 獲取當前路徑

  const isActive = (path) => pathname === path; // 判斷當前路徑是否與鏈接匹配

  return (
    <>
      {/* 固定在頂部的 Header */}
      <header className="bg-maingreen text-black p-4 flex items-center h-32 fixed top-0 w-full z-50 shadow">
        <div className="flex items-center justify-between w-full">
          {/* LOGO 放在最左邊 */}
          <div className="flex-shrink-0">
            <img
              src="/logov2.png"
              alt="Logo"
              className="md:ml-24 h-24 w-auto object-contain"
            />
          </div>

          {/* 導航連結（商品首頁）放在 Logo 右側 */}
          <nav className="hidden md:flex md:text-lg font-bold ml-6 flex-grow">
            <Link
              href="/"
              className={`mr-4 ${
                isActive("/") ? "md:text-xl text-white text-fontofficial font-bold" : "hover:underline"
              }`}
            >
              商品首頁
            </Link>
          </nav>

          {/* 右側裝飾圖片（桌機模式）放在最右邊
          <div className="hidden md:block flex-shrink-0 ml-auto w-auto h-auto">
            <img
              src="/leaf.png"  // 替換成你的裝飾圖片
              alt="裝飾"
              className="h-24 w-auto object-contain"
            />
          </div> */}

          {/* 手機模式的漢堡菜單，放到最右邊 */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              className="text-white text-fontofficial text-5xl focus:outline-none font-extrabold leading-none flex items-start justify-center h-full p-0"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* 側邊欄 */}
      {isSidebarOpen && (
        <div className="fixed top-32 inset-0 bg-maincolor text-black z-40 shadow-lg left-0 w-64">
          <button
            className="text-2xl absolute top-4 right-4 focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
          <nav className="mt-8 flex flex-col items-start p-4">
            <Link
              href="/"
              className={`py-2 ${
                isActive("/") ? "text-fontofficial font-bold" : "hover:underline"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              商品首頁
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
