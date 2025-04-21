import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="text-center max-w-md mx-auto mb-8">
        <div className="mb-6">
          <Zap className="h-24 w-24 text-electric-blue mx-auto lightning-flash" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 neon-text">404</h1>
        <p className="text-2xl font-semibold mb-2 text-white">Страница не найдена</p>
        <p className="text-gray-400 mb-8">
          Возможно, был короткий замыкание, и страница исчезла.
          Давайте вернемся на главную и попробуем еще раз!
        </p>
        
        <Link to="/">
          <Button className="bg-electric-blue hover:bg-electric-blue/80 text-white">
            <Zap className="mr-2 h-5 w-5" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
