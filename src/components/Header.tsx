import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-b-secondary/30 py-4 px-4 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <div className="h-10 w-10 relative">
            <div className="absolute inset-0 rounded-full bg-electric-blue/20 animate-glow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold neon-text text-white">
            Электрик Колпино
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            className="neon-border text-white hover:bg-electric-blue/20"
            onClick={() => window.location.href = 'tel:+79500308830'}
          >
            <PhoneCall className="h-4 w-4 mr-2" />
            +7 950 030 88 30
          </Button>
          <Button 
            variant="default" 
            className="bg-electric-blue/80 hover:bg-electric-blue text-white"
            onClick={() => window.open('https://t.me/elektrikkolpino', '_blank')}
          >
            Telegram
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
