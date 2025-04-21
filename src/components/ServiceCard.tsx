import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-black/40 rounded-lg p-6 border border-electric-blue/30 neon-border group hover:animate-glow transition-all">
      <div className="mb-4 text-electric-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:neon-text transition-all">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
