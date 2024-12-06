"use client";

import { Bell, MessageCircle, Plus, Search } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed left-64 right-0 top-0 z-10 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4">
      {/* 搜索框 */}
      <div className="flex flex-1 items-center justify-center max-w-[480px]">
        <Link href="/search-bar" className="w-full">
          <div className="relative w-full">
            <input
              type="search"
              placeholder="搜索"
              className="w-full rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 py-2 text-sm focus:border-gray-300 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </Link>
      </div>

      {/* 右侧按钮组 */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 rounded-sm border border-gray-200 px-3 py-1.5 text-sm hover:bg-gray-50">
          <Plus className="h-4 w-4" />
          <span>上传</span>
        </button>

        <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
          <MessageCircle className="h-5 w-5" />
        </button>

        <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </button>

        <Link
          href="/login-button"
          className="rounded-full bg-[#FE2C55] px-6 py-1.5 text-sm text-white transition-opacity hover:bg-opacity-90"
        >
          登录
        </Link>
      </div>
    </header>
  );
}
