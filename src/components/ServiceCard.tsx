
import { LucideIcon, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border-2 border-transparent hover:border-primary/20",
      className
    )}>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-800 font-heading group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {features && (
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
            Incluído:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
