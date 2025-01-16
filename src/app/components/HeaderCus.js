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
      <header className="bg-maincolor text-black p-4 flex items-center h-32 fixed top-0 w-full z-50 shadow">
        <div className="flex items-center w-full">
          {/* LOGO + 桌面版導航 */}
          <div className="flex items-center">
            <img
              src="/logob.png" 
              alt="Logo"
              className="md:ml-24 h-24 w-auto object-contain mr-4"
            />

            {/* 桌面模式顯示的導航 */}
            <nav className="hidden md:flex md:text-lg font-bold">
              <Link
                href="/"
                className={`mr-4 ${
                  isActive("/") ? "text-fontofficial font-bold" : "hover:underline"
                }`}
              >
                商品首頁
              </Link>
            </nav>
          </div>

          {/* 手機模式的漢堡菜單，放到最右邊 */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              className="text-fontofficial text-5xl focus:outline-none font-extrabold leading-none flex items-start justify-center h-full p-0"
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
