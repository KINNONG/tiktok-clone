"use client";

import { VideoCard } from "@/components/features/VideoCard";
import { MainLayout } from "@/components/layout/MainLayout";

const videos = [
  {
    id: 1,
    title: "城市夜景延时摄影 #城市 #夜景",
    author: "摄影师阿杰",
    likes: "12.5w",
    comments: "1.2k",
    shares: "3.4k",
    thumbnail: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg",
    video: "https://www.pexels.com/download/video/857251",
    avatar: "https://picsum.photos/seed/photo1/100/100",
  },
  {
    id: 2,
    title: "海浪拍打沙滩 #自然 #海洋",
    author: "自然摄影师",
    likes: "8.9w",
    comments: "5.6k",
    shares: "2.1w",
    thumbnail: "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg",
    video: "https://www.pexels.com/download/video/1409899",
    avatar: "https://picsum.photos/seed/photo2/100/100",
  },
  {
    id: 3,
    title: "雨滴落在窗户上 #雨天 #意境",
    author: "生活记录者",
    likes: "15.2w",
    comments: "2.3w",
    shares: "4.5w",
    thumbnail: "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg",
    video: "https://www.pexels.com/download/video/3045163",
    avatar: "https://picsum.photos/seed/photo3/100/100",
  },
  {
    id: 4,
    title: "日落时分的海滩 #日落 #风景",
    author: "风光摄影师",
    likes: "6.7w",
    comments: "3.2k",
    shares: "1.8k",
    thumbnail: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg",
    video: "https://www.pexels.com/download/video/1550080",
    avatar: "https://picsum.photos/seed/photo4/100/100",
  },
  {
    id: 5,
    title: "繁忙城市的车流 #城市 #延时",
    author: "城市记录者",
    likes: "4.5w",
    comments: "8.9k",
    shares: "2.3w",
    thumbnail: "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg",
    video: "https://www.pexels.com/download/video/1721294",
    avatar: "https://picsum.photos/seed/photo5/100/100",
  },
  {
    id: 6,
    title: "雪山日出美景 #自然 #雪山",
    author: "户外摄影师",
    likes: "3.4w",
    comments: "4.5k",
    shares: "1.2k",
    thumbnail: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg",
    video: "https://www.pexels.com/download/video/6963744",
    avatar: "https://picsum.photos/seed/photo6/100/100",
  },
  {
    id: 7,
    title: "瀑布流水特写 #自然 #瀑布",
    author: "自然探索者",
    likes: "9.2w",
    comments: "3.1k",
    shares: "2.8k",
    thumbnail: "https://images.pexels.com/photos/2609954/pexels-photo-2609954.jpeg",
    video: "https://www.pexels.com/download/video/5752724",
    avatar: "https://picsum.photos/seed/photo7/100/100",
  },
  {
    id: 8,
    title: "城市夜景霓虹 #城市 #夜景",
    author: "夜景摄影师",
    likes: "5.6w",
    comments: "4.2k",
    shares: "1.9k",
    thumbnail: "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg",
    video: "https://www.pexels.com/download/video/1826392",
    avatar: "https://picsum.photos/seed/photo8/100/100",
  },
  {
    id: 9,
    title: "海底珊瑚世界 #海洋 #自然",
    author: "海洋摄影师",
    likes: "7.8w",
    comments: "6.5k",
    shares: "3.3k",
    thumbnail: "https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg",
    video: "https://www.pexels.com/download/video/3641578",
    avatar: "https://picsum.photos/seed/photo9/100/100",
  },
  {
    id: 10,
    title: "森林晨雾缭绕 #自然 #森林",
    author: "自然摄影师",
    likes: "12.4w",
    comments: "8.7k",
    shares: "5.6k",
    thumbnail: "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg",
    video: "https://www.pexels.com/download/video/5752771",
    avatar: "https://picsum.photos/seed/photo10/100/100",
  },
  {
    id: 11,
    title: "城市天际线日落 #城市 #日落",
    author: "城市摄影师",
    likes: "6.9w",
    comments: "4.8k",
    shares: "2.5k",
    thumbnail: "https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg",
    video: "https://www.pexels.com/download/video/1721307",
    avatar: "https://picsum.photos/seed/photo11/100/100",
  },
  {
    id: 12,
    title: "星空延时摄影 #星空 #夜景",
    author: "天文摄影师",
    likes: "8.3w",
    comments: "5.9k",
    shares: "3.1k",
    thumbnail: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg",
    video: "https://www.pexels.com/download/video/1851190",
    avatar: "https://picsum.photos/seed/photo12/100/100",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </MainLayout>
  );
}
