import { Phone, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handlePhoneCall = () => {
    window.location.href = "tel:+79500308830";
  };
  
  const handleTelegramOpen = () => {
    window.open("https://t.me/elektrikkolpino", "_blank");
  };

  return (
    <footer className="bg-black/70 border-t border-electric-blue/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">Электрик Колпино</h3>
            <p className="text-gray-300 mb-4">
              Профессиональные услуги электрика в Колпинском районе Санкт-Петербурга.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">Контакты</h3>
            <div className="space-y-2">
              <div 
                className="flex items-center gap-2 text-gray-300 hover:text-electric-blue cursor-pointer"
                onClick={handlePhoneCall}
              >
                <Phone className="h-4 w-4 text-electric-blue" />
                <span>+7 950 030 88 30</span>
              </div>
              <div 
                className="flex items-center gap-2 text-gray-300 hover:text-electric-blue cursor-pointer"
                onClick={handleTelegramOpen}
              >
                <Send className="h-4 w-4 text-electric-blue" />
                <span>@elektrikkolpino</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">Режим работы</h3>
            <p className="text-gray-300">
              Ежедневно с 8:00 до 22:00<br />
              Выезд на дом в день обращения
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Электрик Колпино. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
