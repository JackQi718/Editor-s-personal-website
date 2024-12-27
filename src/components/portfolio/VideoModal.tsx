import React from 'react';
import { PortfolioItem } from '../../types/portfolio';

interface VideoModalProps {
  video: PortfolioItem;
  onClose: () => void;
}

const VideoModal = ({ video, onClose }: VideoModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2A2A2A] rounded-lg max-w-4xl w-full">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-xl font-semibold">{video.title}</h3>
        </div>
        <div className="aspect-video bg-black">
          <video
            controls
            className="w-full h-full"
            src={video.videoUrl}
          />
        </div>
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#333333] rounded-lg hover:bg-[#444444] transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;