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

      {/* 背景遮罩，讓側邊欄更自然 */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* 側邊欄（帶動畫） */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-maincolor text-black z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            {/* 關閉按鈕 */}
            <button
              className="text-2xl absolute top-4 right-4 focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✕
            </button>
            <nav className="mt-16 flex flex-col items-start p-4">
              <Link
                href="/"
                className={`py-2 ${
                  isActive("/") ? "text-xl font-bold" : "hover:underline"
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                商品首頁
              </Link>
            </nav>
          </div>

          {/* QR Code 區塊（置於側邊欄底部） */}
          <div className="mb-6 flex flex-col items-center text-center">
            <h3 className="text-fontofficial font-bold text-black mb-2">
              掃描 QR Code 聯絡客服訂購
            </h3>
            <h3 className="text-fontofficial font-bold text-black mb-2">
              【富哥】LineID：jefflee614
            </h3>
            <img 
              src="/qrcode.jpg" 
              alt="QR Code"
              className="w-full max-w-24 rounded-lg shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
