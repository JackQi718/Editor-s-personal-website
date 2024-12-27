import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80)',
      }}
    >
      <div className="absolute inset-0 bg-[#1A1A1A]/60" />
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          捕捉每一瞬，讲述非凡故事
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          专业视频剪辑与后期制作，让您的创意完美呈现
        </p>
        <div className="space-x-4">
          <a
            href="#portfolio"
            className="inline-block bg-[#FFA500] hover:bg-[#FF8C00] text-white px-8 py-3 rounded-lg transition-colors"
          >
            查看作品集
          </a>
          <a
            href="#contact"
            className="inline-block border-2 border-white hover:bg-white hover:text-[#1A1A1A] px-8 py-3 rounded-lg transition-colors"
          >
            联系我们
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;