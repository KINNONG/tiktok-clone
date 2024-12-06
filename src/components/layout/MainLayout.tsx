"use client";

import dynamic from "next/dynamic";

// 动态导入组件
const Sidebar = dynamic(() => import("./Sidebar").then((mod) => mod.Sidebar), {
  ssr: false,
  loading: () => <div className="fixed left-0 top-0 h-full w-32 animate-pulse bg-gray-100" />,
});

const Header = dynamic(() => import("./Header").then((mod) => mod.Header), {
  ssr: false,
  loading: () => <div className="fixed left-32 right-0 top-0 h-14 animate-pulse bg-gray-100" />,
});

const CategoryNav = dynamic(() => import("./CategoryNav").then((mod) => mod.CategoryNav), {
  ssr: false,
  loading: () => <div className="fixed left-32 right-0 top-14 h-12 animate-pulse bg-gray-100" />,
});

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="fixed inset-0 flex bg-gray-50">
      <Sidebar />
      <div className="ml-64 flex flex-1 flex-col">
        <Header />
        <CategoryNav />
        <main className="relative mt-28 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
