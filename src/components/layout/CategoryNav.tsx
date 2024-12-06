"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "全部",
  "唱歌跳舞",
  "喜剧",
  "运动",
  "动画与漫画",
  "情感关系",
  "表演",
  "对口型",
  "日常生活",
  "美容护理",
  "游戏",
  "社会",
  "穿搭",
  "汽车",
  "美食",
  "动物",
  "家庭",
  "娱乐",
  "健身和健康",
  "教育",
  "科技",
];

export function CategoryNav() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("category-container");
    if (container) {
      const scrollAmount = 200;
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="fixed left-64 right-0 top-14 z-10 flex items-center border-b border-gray-200 bg-white px-2">
      <button
        onClick={() => handleScroll("left")}
        className="flex h-12 w-8 items-center justify-center hover:text-[#FE2C55]"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div id="category-container" className="flex-1 overflow-hidden whitespace-nowrap py-3 scrollbar-hide">
        <div className="inline-flex space-x-6">
          {categories.map((category) => (
            <button key={category} className="text-gray-600 transition-colors hover:text-[#FE2C55]">
              {category}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => handleScroll("right")}
        className="flex h-12 w-8 items-center justify-center hover:text-[#FE2C55]"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
