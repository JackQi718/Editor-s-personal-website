import React, { useState } from 'react';
import PortfolioGrid from './portfolio/PortfolioGrid';
import VideoModal from './portfolio/VideoModal';
import CategoryFilter from './portfolio/CategoryFilter';
import { PortfolioItem } from '../types/portfolio';

const categories = ['全部', '宣传片', '游戏广告', '二维动画', '三维动画'];

const portfolioItems = [
  {
    id: 1,
    title: '宣传片',
    category: '商业广告',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80',
    videoUrl: 'https://cloud.video.taobao.com//play/u/705956171/p/1/e/6/t/1/410211685483.mp4',
  },
  {
    id: 2,
    title: '游戏广告',
    category: '短片',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
    videoUrl: 'https://cloud.video.taobao.com//play/u/705956171/p/1/e/6/t/1/410211685483.mp4',
  },
  {
    id: 3,
    title: '二维动画',
    category: '特效设计',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80',
    videoUrl: 'https://example.com/video3.mp4',
  },
    {
    id: 4,
    title: '三维动画',
    category: '特效设计',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80',
    videoUrl: 'https://example.com/video3.mp4',
  },
    {
    id: 5,
    title: '游戏广告',
    category: '短片',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80',
    videoUrl: 'https://example.com/video3.mp4',
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === '全部' || item.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">作品集</h2>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <PortfolioGrid items={filteredItems} onSelectVideo={setSelectedVideo} />
        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
