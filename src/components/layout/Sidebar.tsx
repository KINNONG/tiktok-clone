"use client";

import { Compass, Gamepad2, Home, Settings, ShoppingBag, TrendingUp, Users, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Home, label: "首页", href: "/" },
  { icon: Compass, label: "探索", href: "/search-bar" },
  { icon: Users, label: "关注", href: "/foryou" },
  { icon: Video, label: "直播", href: "/live" },
];

const recommendItems = [
  { icon: TrendingUp, label: "热门", href: "/trending" },
  { icon: Gamepad2, label: "游戏", href: "/games" },
  { icon: ShoppingBag, label: "购物", href: "/shopping" },
  { icon: Settings, label: "设置", href: "/etc" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 border-r border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-center border-b border-gray-200">
        <Link href="/">
          <h1 className="text-xl font-bold text-[#FE2C55]">Tik Tok</h1>
        </Link>
      </div>

      <div className="flex h-[calc(100vh-3.5rem)] flex-col p-2">
        {/* 主导航 */}
        <nav className="space-y-1 border-b border-gray-100 py-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <button
                className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 transition-colors ${
                  pathname === item.href
                    ? "bg-gray-50 text-[#FE2C55]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#FE2C55]"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            </Link>
          ))}
        </nav>

        {/* 推荐区域 */}
        <div className="py-4">
          <h2 className="mb-2 px-4 text-sm font-semibold text-gray-500">推荐</h2>
          <nav className="space-y-1">
            {recommendItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <button
                  className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 transition-colors ${
                    pathname === item.href
                      ? "bg-gray-50 text-[#FE2C55]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#FE2C55]"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </nav>
        </div>

        {/* 登录提示 */}
        <div className="mt-auto border-t border-gray-100 p-4">
          <p className="mb-4 text-sm text-gray-500">登录后查看更多内容</p>
          <Link href="/personal-profile">
            <button className="w-full rounded-full bg-[#FE2C55] px-6 py-2.5 text-sm text-white transition-opacity hover:bg-opacity-90">
              登录
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
