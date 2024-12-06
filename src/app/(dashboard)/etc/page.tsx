"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Bell, Globe, Moon, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-3xl">
        <div className="space-y-6">
          {/* 通知设置 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center">
              <Bell className="mr-2 h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-medium">通知设置</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">推送通知</p>
                  <p className="text-sm text-gray-500">接收新消息和活动的通知</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FE2C55] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none" />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">邮件通知</p>
                  <p className="text-sm text-gray-500">接收重要更新的邮件</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FE2C55] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none" />
                </label>
              </div>
            </div>
          </div>

          {/* 隐私设置 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center">
              <Shield className="mr-2 h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-medium">隐私设置</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">私密账号</p>
                  <p className="text-sm text-gray-500">只允许关注者查看你的内容</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FE2C55] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none" />
                </label>
              </div>
            </div>
          </div>

          {/* 外观设置 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center">
              <Moon className="mr-2 h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-medium">外观设置</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">深色模式</p>
                  <p className="text-sm text-gray-500">切换深色主题</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#FE2C55] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none" />
                </label>
              </div>
            </div>
          </div>

          {/* 语言设置 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-center">
              <Globe className="mr-2 h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-medium">语言设置</h3>
            </div>
            <div className="space-y-4">
              <select className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#FE2C55] focus:outline-none">
                <option>简体中文</option>
                <option>English</option>
                <option>日本語</option>
                <option>한국어</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
