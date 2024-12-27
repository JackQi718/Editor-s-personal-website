import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#2A2A2A] p-6 rounded-lg hover:bg-[#333333] transition-colors">
      <Icon
        className="w-12 h-12 text-[#007BFF] mb-4"
        strokeWidth={1.5}
      />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;