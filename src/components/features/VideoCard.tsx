"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    author: string;
    likes: string;
    comments: string;
    shares: string;
    thumbnail: string;
    video: string;
    avatar: string;
  };
}

export function VideoCard({ video }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // 视频播放函数
  const playVideo = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("视频播放失败:", error);
        setIsPlaying(false);
      }
    }
  };

  // 视频暂停函数
  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  // 处理鼠标移入
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      playVideo();
    }, 200);
  };

  // 处理鼠标移出
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    pauseVideo();
  };

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      pauseVideo();
    };
  }, []);

  return (
    <div
      className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 视频/缩略图容器 */}
      <div className="absolute inset-0">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isHovered && isPlaying ? "opacity-0" : "opacity-100"
          }`}
          priority
        />
        <video
          ref={videoRef}
          src={video.video}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isHovered && isPlaying ? "opacity-100" : "opacity-0"
          }`}
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />

      {/* 内容层 */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-3 text-white">
        {/* 作者信息 */}
        <div className="mb-1.5 flex items-center">
          <Image
            src={video.avatar}
            alt={video.author}
            width={24}
            height={24}
            className="rounded-full border border-white/50"
          />
          <div className="ml-1.5">
            <h3 className="text-sm font-medium">{video.author}</h3>
          </div>
        </div>

        {/* 视频标题 */}
        <p className="mb-2 line-clamp-2 text-xs opacity-90">{video.title}</p>

        {/* 互动按钮 */}
        <div className="flex items-center justify-between text-xs">
          <button className="flex items-center space-x-1">
            <Heart className="h-3 w-3" />
            <span>{video.likes}</span>
          </button>
          <button className="flex items-center space-x-1">
            <MessageCircle className="h-3 w-3" />
            <span>{video.comments}</span>
          </button>
          <button className="flex items-center space-x-1">
            <Share2 className="h-3 w-3" />
            <span>{video.shares}</span>
          </button>
        </div>
      </div>

      {/* 播放进度条 */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
        <div
          className={`h-full bg-white transition-all duration-300 ${isHovered && isPlaying ? "w-full" : "w-0"}`}
          style={{ transitionDuration: "8s" }}
        />
      </div>
    </div>
  );
}
