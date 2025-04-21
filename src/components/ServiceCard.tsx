import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="bg-black/50 border-electric-blue/30 overflow-hidden group hover-scale">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="relative">
        <div className="mb-2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center border border-electric-blue/50 neon-border">
          {icon}
        </div>
        <CardTitle className="text-white neon-text">{title}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
