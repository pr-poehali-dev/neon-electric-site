import { Youtube, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-electric-blue/20 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 neon-text">Электрик Колпино</h3>
          <p className="text-gray-400 mb-4">
            Профессиональные услуги электрика в Колпинском районе Санкт-Петербурга.
            Оперативный выезд, качественная работа, доступные цены.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://youtube.com/@elektrikkolpino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-red-600/20 flex items-center justify-center hover:bg-red-600/40 transition-colors"
            >
              <Youtube size={20} className="text-red-500" />
            </a>
            <a 
              href="https://t.me/elektrikkolpino" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/40 transition-colors"
            >
              <Send size={20} className="text-blue-500" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 neon-text">Контакты</h3>
          <div className="space-y-2 text-gray-300">
            <p>Телефон: <a href="tel:+79500308830" className="hover:text-electric-blue">+7 950 030 88 30</a></p>
            <p>Telegram: <a href="https://t.me/elektrikkolpino" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue">@elektrikkolpino</a></p>
            <p>Район обслуживания: Колпинский район, Санкт-Петербург</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 neon-text">Рабочие часы</h3>
          <div className="space-y-2 text-gray-300">
            <p>Понедельник - Пятница: 8:00 - 21:00</p>
            <p>Суббота: 9:00 - 18:00</p>
            <p>Воскресенье: 10:00 - 16:00</p>
            <p className="text-electric-blue mt-4">Экстренные вызовы: 24/7</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 pt-6 border-t border-gray-800">
        <p className="text-gray-500 text-center">© {new Date().getFullYear()} Электрик Колпино. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
