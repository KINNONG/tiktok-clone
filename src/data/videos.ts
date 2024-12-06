export interface Video {
  id: number;
  title: string;
  author: string;
  avatar: string;
  video: string;
  likes: string;
  comments: string;
  shares: string;
  thumbnail: string;
}

export const videos: Video[] = [
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
