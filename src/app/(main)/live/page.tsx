"use client";

import { MainLayout } from "@/components/layout/MainLayout";
import Image from "next/image";

// 模拟直播数据
const liveStreams = [
  {
    id: 1,
    title: "王者荣耀排位赛",
    game: "王者荣耀",
    streamer: "游戏达人",
    viewers: "5.1万",
    thumbnail: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    avatar: "https://picsum.photos/seed/streamer1/100/100",
  },
  {
    id: 2,
    title: "和平精英职业赛",
    game: "和平精英",
    streamer: "职业选手",
    viewers: "3.2万",
    thumbnail: "https://images.pexels.com/photos/7862657/pexels-photo-7862657.jpeg",
    avatar: "https://picsum.photos/seed/streamer2/100/100",
  },
  {
    id: 3,
    title: "英雄联盟排位",
    game: "英雄联盟",
    streamer: "联盟玩家",
    viewers: "2.8万",
    thumbnail: "https://images.pexels.com/photos/7915257/pexels-photo-7915257.jpeg",
    avatar: "https://picsum.photos/seed/streamer3/100/100",
  },
  {
    id: 4,
    title: "第五人格娱乐赛",
    game: "第五人格",
    streamer: "恐怖玩家",
    viewers: "1.5万",
    thumbnail: "https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg",
    avatar: "https://picsum.photos/seed/streamer4/100/100",
  },
];

// 游戏分类
const gameCategories = [
  "推荐",
  "巴西足球",
  "生活方式",
  "三角洲行动",
  "绝地求生",
  "Garena Free Fire",
  "元宇宙",
  "堡垒之夜",
  "传说对决",
  "Roblox",
  "Grand Theft Auto V",
  "我的世界",
  "使命召唤手游",
  "使命召唤",
  "Euro Truck Simulator 2",
  "荒野乱斗",
  "EA Sports FC",
  "塔防游戏",
  "eFootball 2023",
  "VALORANT",
];

export default function LivePage() {
  return (
    <MainLayout>
      <div className="h-full flex flex-col">
        {/* 游戏分类横向滚动条 */}
        <div className="flex-none border-b border-gray-100">
          <div className="relative">
            {/* 渐变遮罩 */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

            {/* 滚动容器 */}
            <div className="flex overflow-x-auto px-6 py-3 scrollbar-hide">
              <div className="flex flex-nowrap gap-3">
                {gameCategories.map((category, index) => (
                  <button
                    key={index}
                    className="flex-none rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 直播列表 */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* 每行显示一个游戏类别 */}
          <div className="space-y-8">
            {/* 推荐直播 */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">推荐直播</h2>
              <div className="flex overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-4">
                  {liveStreams.map((stream) => (
                    <div key={stream.id} className="w-[360px] flex-none rounded-lg bg-white shadow-sm">
                      {/* 直播缩略图 */}
                      <div className="relative aspect-video">
                        <Image src={stream.thumbnail} alt={stream.title} fill className="object-cover rounded-t-lg" />
                        {/* 直播标签 */}
                        <div className="absolute left-2 top-2 rounded bg-red-500 px-2 py-0.5 text-xs text-white">
                          直播
                        </div>
                        {/* 观看人数 */}
                        <div className="absolute bottom-2 left-2 rounded bg-black/50 px-2 py-0.5 text-xs text-white">
                          {stream.viewers}观看
                        </div>
                      </div>

                      {/* 直播信息 */}
                      <div className="p-3">
                        <div className="flex items-start space-x-3">
                          {/* 主播头像 */}
                          <Image
                            src={stream.avatar}
                            alt={stream.streamer}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            {/* 直播标题 */}
                            <h3 className="mb-1 line-clamp-1 font-medium text-gray-900">{stream.title}</h3>
                            {/* 主播名称 */}
                            <p className="text-sm text-gray-500">{stream.streamer}</p>
                            {/* 游戏名称 */}
                            <p className="mt-1 text-sm text-gray-500">{stream.game}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
