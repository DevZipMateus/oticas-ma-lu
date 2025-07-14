
import { Eye, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/d93cafa4-e948-4373-af4f-5e783db0b889.png" 
                alt="Óticas Ma & Lu" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold font-heading">Óticas Ma & Lu</h3>
                <p className="text-sm text-gray-400">Cuidando da sua visão</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Oferecemos cuidado, atenção e qualidade para sua saúde visual com 
              profissionais especializados e armações exclusivas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-secondary transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#localizacao" className="text-gray-300 hover:text-secondary transition-colors">Localização</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Exames de Vista</li>
              <li className="text-gray-300 text-sm">Armações Exclusivas</li>
              <li className="text-gray-300 text-sm">Lentes Especializadas</li>
              <li className="text-gray-300 text-sm">Óculos de Sol</li>
              <li className="text-gray-300 text-sm">Óculos Infantis</li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-heading">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-gray-300 text-sm">Estrada Água Chata, 888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="tel:+5511969543234" className="text-gray-300 hover:text-secondary transition-colors text-sm">
                  (11) 96954-3234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <a href="mailto:maelu.oticas@gmail.com" className="text-gray-300 hover:text-secondary transition-colors text-sm break-all">
                  maelu.oticas@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-secondary flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/maeluoticas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors text-sm"
                >
                  @maeluoticas
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Óticas Ma & Lu. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              <span className="inline-flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>Cuidar da sua visão é a nossa missão</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
