import React from 'react';
import { Video, Play, Palette } from 'lucide-react';
import ServiceCard from './services/ServiceCard';

const services = [
  {
    icon: Video,
    title: '企业宣传视频',
    description:
      '专业的企业形象视频制作，从前期策划到后期制作，为您的品牌打造独特的视觉语言。',
  },
  {
    icon: Play,
    title: '社交媒体短视频',
    description:
      '针对不同平台特点，制作吸引眼球的短视频内容，提升品牌在社交媒体的影响力。',
  },
  {
    icon: Palette,
    title: '高级调色与特效',
    description:
      '专业的视频调色服务和特效制作，让您的视频作品更具视觉冲击力和艺术感染力。',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">我的服务</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;