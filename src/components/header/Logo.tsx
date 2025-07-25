
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
          scrolled ? "h-8 sm:h-10 md:h-12" : "h-10 sm:h-12 md:h-16"
        )}
      />
      <div className="ml-2 sm:ml-3">
        <div
          className={cn(
            "font-bold transition-all duration-300 font-heading leading-tight",
            scrolled 
              ? "text-base sm:text-lg md:text-xl text-black" 
              : "text-lg sm:text-xl md:text-2xl text-black",
            "hover:scale-105"
          )}
        >
          Óticas Ma & Lu
        </div>
        <div className={cn(
          "text-xs sm:text-sm transition-all duration-300 leading-tight",
          scrolled ? "text-gray-600" : "text-black/80"
        )}>
          Cuidar da sua visão é a nossa missão
        </div>
      </div>
    </a>
  );
};

export default Logo;
