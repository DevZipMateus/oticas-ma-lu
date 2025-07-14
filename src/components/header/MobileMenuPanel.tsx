import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({ isMenuOpen, onClose, menuItems }: MobileMenuPanelProps) => {
  return (
    <div 
      className={cn(
        'fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white shadow-xl',
        'transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/d93cafa4-e948-4373-af4f-5e783db0b889.png" 
            alt="Óticas Ma & Lu" 
            className="h-10 object-contain mr-3"
          />
          <div>
            <div className="text-lg font-bold text-primary font-heading">Óticas Ma & Lu</div>
            <div className="text-xs text-gray-600">Cuidando da sua visão</div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="px-6 pt-8 pb-8 overflow-y-auto h-[calc(100%-82px)]">
        <ul className="space-y-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-xl font-medium text-gray-800 hover:text-primary transition-all duration-200 block py-2 
                           hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-primary font-heading"
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-md text-gray-500 mb-3">Entre em contato conosco</p>
          <a 
            href="tel:+5511969543234" 
            className="text-xl text-primary hover:text-primary/80 font-medium block py-2
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]"
          >
            (11) 96954-3234
          </a>
          <a 
            href="mailto:maelu.oticas@gmail.com" 
            className="text-lg text-gray-600 hover:text-primary/80 block py-1
                       transition-all duration-200 hover:translate-x-1"
          >
            maelu.oticas@gmail.com
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;
