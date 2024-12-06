"use client";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#FE2C55]">Tik Tok</h1>
          <p className="mt-2 text-sm text-gray-600">登录后查看更多精彩内容</p>
        </div>
        {children}
      </div>
    </div>
  );
}
