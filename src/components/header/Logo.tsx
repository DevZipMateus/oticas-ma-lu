
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#inicio" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/d93cafa4-e948-4373-af4f-5e783db0b889.png" 
        alt="Óticas Ma & Lu - Logo" 
        className={cn(
          "transition-all duration-300 object-contain",
          scrolled ? "h-12" : "h-16"
        )}
      />
      <div className="ml-3">
        <div
          className={cn(
            "font-bold transition-all duration-300 font-heading",
            scrolled ? "text-xl text-black" : "text-2xl text-black",
            "hover:scale-105"
          )}
        >
          Óticas Ma & Lu
        </div>
        <div className={cn(
          "text-sm transition-all duration-300",
          scrolled ? "text-gray-600" : "text-black/80"
        )}>
          Cuidar da sua visão é a nossa missão
        </div>
      </div>
    </a>
  );
};

export default Logo;
