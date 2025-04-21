import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LightningAnimation from "@/components/LightningAnimation";
import ServiceCard from "@/components/ServiceCard";
import SiteLink from "@/components/SiteLink";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  Lightbulb, 
  WrenchIcon, 
  ShieldCheck, 
  Clock, 
  Phone,
  Send,
  Youtube
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("services");
  
  const services = [
    {
      title: "Ремонт электропроводки",
      description: "Диагностика и устранение неисправностей в электропроводке любой сложности",
      icon: <Zap className="h-6 w-6 text-electric-blue" />
    },
    {
      title: "Замена розеток и выключателей",
      description: "Качественная замена розеток, выключателей и других электроустановочных изделий",
      icon: <Lightbulb className="h-6 w-6 text-electric-blue" />
    },
    {
      title: "Монтаж освещения",
      description: "Установка светильников, люстр, бра и другого осветительного оборудования",
      icon: <WrenchIcon className="h-6 w-6 text-electric-blue" />
    }
  ];
  
  const websites = [
    "https://elektrik-kolpino.narod.ru",
    "http://elektrikkolpino.bos.ru",
    "https://colpino-electric-service.poehali.dev",
    "https://elektrik-sait-video.poehali.dev",
    "https://anime-electrics-project.poehali.dev",
    "https://kolpino-electric-site.poehali.dev",
    "https://minimal-electric-site.poehali.dev",
    "https://kolpino-lightning-site.poehali.dev",
    "https://kolpino-electric-site-1.poehali.dev",
    "https://elektromontazh-sait.poehali.dev",
    "https://kolpino-electric-initiative.poehali.dev",
    "https://website-replication-project.poehali.dev",
    "https://elektrik-kolpino.renderforestsites.com",
    "https://elektrikkolpino.renderforestsites.com"
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/b5c65549-12fd-4de1-9c9f-0d4b40115775.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-yellow">
              Электрик Колпино
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Профессиональные услуги электрика в Колпинском районе Санкт-Петербурга.
              Быстрый выезд, качественный ремонт, доступные цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue/80 text-white"
                onClick={() => window.location.href = 'tel:+79500308830'}
              >
                <Phone className="mr-2 h-5 w-5" />
                +7 950 030 88 30
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-electric-blue text-white hover:bg-electric-blue/20"
                onClick={() => window.open('https://t.me/elektrikkolpino', '_blank')}
              >
                <Send className="mr-2 h-5 w-5" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <Tabs defaultValue="services" className="mb-16" onValueChange={setActiveTab}>
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="map">Карта района</TabsTrigger>
            <TabsTrigger value="sites">Сайты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="services" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            
            <div className="bg-black/40 p-6 rounded-lg border border-electric-blue/30 neon-border mt-12">
              <h3 className="text-2xl font-bold mb-4 neon-text">Преимущества работы со мной</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-electric-blue"><ShieldCheck /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Гарантия на работу</h4>
                    <p className="text-gray-400">Предоставляю гарантию на все выполненные работы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-electric-blue"><Clock /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Оперативный выезд</h4>
                    <p className="text-gray-400">Выезд в день обращения в течение 1-2 часов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-electric-blue"><Zap /></div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Опыт работы</h4>
                    <p className="text-gray-400">Более 10 лет опыта в электромонтажных работах</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="map">
            <div className="bg-black/40 p-6 rounded-lg border border-electric-blue/30 neon-border">
              <h2 className="text-2xl font-bold mb-6 neon-text text-center">Карта Колпинского района</h2>
              <div className="w-full max-w-3xl mx-auto mb-8">
                <LightningAnimation />
              </div>
              <div className="text-center text-gray-300 max-w-xl mx-auto">
                <p className="mb-4">
                  Обслуживаю все районы Колпино и Колпинского района. 
                  Оперативно приеду в любую точку в течение 1-2 часов.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-electric-blue">
                  <Zap className="lightning-flash h-5 w-5" />
                  <span className="font-semibold">Выезд на дом в день обращения!</span>
                  <Zap className="lightning-flash h-5 w-5" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sites">
            <div className="bg-black/40 p-6 rounded-lg border border-electric-blue/30 neon-border">
              <h2 className="text-2xl font-bold mb-6 neon-text text-center">Другие мои сайты</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {websites.map((site, index) => (
                  <SiteLink key={index} url={site} />
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-4 neon-text">YouTube канал</h3>
                <a 
                  href="https://youtube.com/@elektrikkolpino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-red-600/20 hover:bg-red-600/30 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-red-500" />
                  <span className="text-white">Подписаться на канал</span>
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-electric-blue/20 to-neon-pink/20 p-8 rounded-lg mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 neon-text">Нужна помощь электрика?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Пришлите фото с проблемой в Telegram, и я подскажу решение.
              Можно сразу договориться о выезде в удобное для вас время.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue/80 text-white"
                onClick={() => window.location.href = 'tel:+79500308830'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Позвонить сейчас
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-electric-blue text-white hover:bg-electric-blue/20"
                onClick={() => window.open('https://t.me/elektrikkolpino', '_blank')}
              >
                <Send className="mr-2 h-5 w-5" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
