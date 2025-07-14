
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossa Localização</h2>
          <p className="section-subtitle">
            Encontre-nos facilmente e venha nos visitar para cuidar da sua visão
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 font-heading">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                      <p className="text-gray-600">Estrada Água Chata, 888</p>
                      <p className="text-gray-600">São Paulo - SP</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                      <a href="tel:+5511969543234" className="text-primary hover:text-primary/80 transition-colors">
                        (11) 96954-3234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                      <a href="mailto:maelu.oticas@gmail.com" className="text-primary hover:text-primary/80 transition-colors break-all">
                        maelu.oticas@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 14h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5511969543234" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Conversar no WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/maeluoticas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="glass-card rounded-2xl p-2 h-96 lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.123456789!2d-46.123456789!3d-23.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEstrada%20%C3%81gua%20Chata%2C%20888!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Óticas Ma & Lu - Estrada Água Chata, 888"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
