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
        <div className="flex items-center space-x-4">
          <img
            src="/logob.png" // 改為 Next.js 的 public 資源路徑
            alt="Cover"
            className="md:ml-24 h-24 w-auto object-contain mr-4"
          />

          {/* 桌面模式顯示的導航 */}
          <nav className="hidden md:flex md:text-lg font-bold ">
            <Link
              href="/"
              className={`mr-4 ${
                isActive("/") ? "text-fontofficial font-bold" : "hover:underline"
              }`}
            >
              商品首頁
            </Link>
            {/* <Link
              href="/about"
              className={`${
                isActive("/about")
                  ? "text-fontofficial font-bold"
                  : "hover:underline"
              }`}
            >
              店家介紹
            </Link> */}
          </nav>

          {/* 手機模式的漢堡菜單 */}
          <div className="md:hidden flex items-center space-x-4 h-full">
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
            {/* <Link
              href="/about"
              className={`py-2 ${
                isActive("/about")
                  ? "text-fontofficial font-bold"
                  : "hover:underline"
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              店家介紹
            </Link> */}
          </nav>
        </div>
      )}
    </>
  );
}
