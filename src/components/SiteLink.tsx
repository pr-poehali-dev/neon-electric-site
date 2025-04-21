import { ExternalLink } from 'lucide-react';

interface SiteLinkProps {
  url: string;
}

const SiteLink = ({ url }: SiteLinkProps) => {
  // Format the URL for display
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 p-3 rounded-md bg-black/40 hover:bg-electric-blue/10 text-gray-300 hover:text-white transition-colors group border border-transparent hover:border-electric-blue/30"
    >
      <ExternalLink className="h-4 w-4 text-electric-blue" />
      <span className="text-sm truncate flex-1">{displayUrl}</span>
      <div className="h-2 w-2 rounded-full bg-electric-blue/70 group-hover:animate-pulse"></div>
    </a>
  );
};

export default SiteLink;
