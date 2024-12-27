import React from 'react';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioGridProps {
  items: PortfolioItem[];
  onSelectVideo: (video: PortfolioItem) => void;
}

const PortfolioGrid = ({ items, onSelectVideo }: PortfolioGridProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group cursor-pointer"
          onClick={() => onSelectVideo(item)}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;