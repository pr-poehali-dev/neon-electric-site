import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handlePhoneCall = () => {
    window.location.href = "tel:+79500308830";
  };

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-electric-blue/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center neon-border animate-glow">
            <span className="text-xl font-bold text-white">⚡</span>
          </div>
          <div>
            <h1 className="text-xl font-bold neon-text">
              Электрик Колпино
            </h1>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          className="text-white hover:text-electric-blue hover:bg-transparent"
          onClick={handlePhoneCall}
        >
          <Phone className="mr-2 h-4 w-4 text-electric-blue" />
          +7 950 030 88 30
        </Button>
      </div>
    </header>
  );
};

export default Header;
