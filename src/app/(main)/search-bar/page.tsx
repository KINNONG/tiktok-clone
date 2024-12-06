"use client";

import { VideoCard } from "@/components/features/VideoCard";
import { MainLayout } from "@/components/layout/MainLayout";
import { videos } from "@/data/videos";

import { Search } from "lucide-react";

export default function SearchPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl">
        {/* 搜索区域 */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="search"
              placeholder="搜索视频、用户、音乐..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-12 py-3 focus:border-gray-300 focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>

          {/* 筛选选项 */}
          <div className="mt-4 flex space-x-4">
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm">
              <option>全部分类</option>
              <option>视频</option>
              <option>用户</option>
              <option>音乐</option>
            </select>
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm">
              <option>最新发布</option>
              <option>最多播放</option>
              <option>最多点赞</option>
            </select>
          </div>
        </div>

        {/* 搜索结果 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
