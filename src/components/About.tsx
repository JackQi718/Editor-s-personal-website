import React from 'react';
import SkillsList from './about/SkillsList';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?auto=format&fit=crop&q=80"
              alt="北山工作照"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">关于我</h2>
            <p className="text-lg mb-6 text-gray-300">
              作为一名专业视频剪辑师，我拥有超过5年的行业经验，专注于创作高质量的视频内容。我精通 Adobe Premiere Pro、After Effects 等专业工具，能够为您提供从概念到成片的完整制作服务。
            </p>
            <SkillsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;