"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Camera } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl">
        {/* 头像上传 */}
        <div className="mb-8 text-center">
          <div className="relative mx-auto inline-block">
            <Image
              src="https://picsum.photos/seed/user/200/200"
              alt="用户头像"
              width={120}
              height={120}
              className="rounded-full"
            />
            <button className="absolute bottom-0 right-0 rounded-full bg-[#FE2C55] p-2 text-white shadow-lg">
              <Camera className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* 个人信息表单 */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">用户名</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FE2C55] focus:outline-none"
                defaultValue="抖音用户"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">昵称</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FE2C55] focus:outline-none"
                defaultValue="小明"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">个人简介</label>
            <textarea
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FE2C55] focus:outline-none"
              defaultValue="这是我的个人简介..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">电子邮箱</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FE2C55] focus:outline-none"
              defaultValue="example@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">手机号码</label>
            <input
              type="tel"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FE2C55] focus:outline-none"
              defaultValue="13800138000"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              取消
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent bg-[#FE2C55] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#FE2C55]/90"
            >
              保存
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
