
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#inicio" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/08cb2c1d-f8b4-42cd-97c3-25f91654de32.png" 
        alt="Óticas Ma & Lu - Logo" 
        className={cn(
          "transition-all duration-300",
          scrolled ? "h-12 w-12" : "h-16 w-16"
        )}
      />
      <div className="ml-3">
        <div
          className={cn(
            "font-bold transition-all duration-300 font-heading",
            scrolled ? "text-xl text-primary" : "text-2xl text-white",
            "hover:scale-105"
          )}
        >
          Óticas Ma & Lu
        </div>
        <div className={cn(
          "text-sm transition-all duration-300",
          scrolled ? "text-gray-600" : "text-white/80"
        )}>
          Cuidar da sua visão é a nossa missão
        </div>
      </div>
    </a>
  );
};

export default Logo;
