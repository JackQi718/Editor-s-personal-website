import React from 'react';
import { Instagram, Youtube, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#B0B0B0] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Video className="h-8 w-8 text-[#007BFF]" />
            <span className="text-2xl font-bold text-white">北山</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p>© 2024 北山. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;