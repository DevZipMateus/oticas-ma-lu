
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './header/Logo';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenuButton from './header/MobileMenuButton';
import MobileMenuOverlay from './header/MobileMenuOverlay';
import MobileMenuPanel from './header/MobileMenuPanel';
import { MenuItem } from './header/types';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMobile) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen, isMobile]);

  const menuItems: MenuItem[] = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-4'
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 flex justify-between items-center max-w-7xl">
        <Logo scrolled={scrolled} />
        <DesktopNavigation menuItems={menuItems} scrolled={scrolled} />
        <MobileMenuButton 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          scrolled={scrolled} 
        />
      </div>

      <MobileMenuOverlay isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <MobileMenuPanel 
        isMenuOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        menuItems={menuItems}
      />
    </header>
  );
};

export default Header;
