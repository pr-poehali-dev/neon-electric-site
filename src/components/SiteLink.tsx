import { ExternalLink } from "lucide-react";

interface SiteLinkProps {
  url: string;
  label?: string;
}

const SiteLink = ({ url, label }: SiteLinkProps) => {
  // Если метка не указана, используем URL без протокола
  const displayText = label || url.replace(/(^\w+:|^)\/\//, '');
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 p-2 rounded-md transition-all duration-300 hover:bg-white/5 group"
    >
      <ExternalLink size={16} className="text-electric-blue group-hover:text-white transition-colors duration-300" />
      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 truncate">
        {displayText}
      </span>
    </a>
  );
};

export default SiteLink;
