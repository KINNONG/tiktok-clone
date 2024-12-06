"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import { videos } from "@/data/videos";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";

export default function ForYouPage() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative mb-6 w-full overflow-hidden rounded-lg bg-black"
            style={{ height: "calc(100vh - 120px)" }}
          >
            {/* 视频封面 */}
            <Image src={video.thumbnail} alt={video.title} fill className="object-cover" priority />

            {/* 视频信息层 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <div className="mt-2 flex items-center">
                <Image src={video.avatar} alt={video.author} width={32} height={32} className="rounded-full" />
                <span className="ml-2">{video.author}</span>
              </div>
            </div>

            {/* 互动按钮 */}
            <div className="absolute bottom-20 right-4 flex flex-col items-center space-y-4">
              <button className="flex flex-col items-center">
                <div className="rounded-full bg-black/40 p-2">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="mt-1 text-sm text-white">{video.likes}</span>
              </button>

              <button className="flex flex-col items-center">
                <div className="rounded-full bg-black/40 p-2">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <span className="mt-1 text-sm text-white">{video.comments}</span>
              </button>

              <button className="flex flex-col items-center">
                <div className="rounded-full bg-black/40 p-2">
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <span className="mt-1 text-sm text-white">{video.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
