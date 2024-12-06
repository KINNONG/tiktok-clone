"use client";

import { Settings, User } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 侧边栏 */}
      <aside className="fixed left-0 top-0 h-full w-32 border-r border-gray-200 bg-white">
        <div className="flex h-14 items-center justify-center border-b border-gray-200">
          <h1 className="text-xl font-bold text-[#FE2C55]">个人中心</h1>
        </div>
        <nav className="p-4">
          <div className="space-y-1">
            <button className="flex w-full items-center space-x-3 rounded-lg bg-gray-50 px-4 py-3 text-[#FE2C55]">
              <User className="h-5 w-5" />
              <span>个人资料</span>
            </button>
            <button className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-50">
              <Settings className="h-5 w-5" />
              <span>设置</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* 主内容区 */}
      <div className="ml-32 flex-1">
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white px-6 py-4">
          <h2 className="text-lg font-medium">个人资料</h2>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
