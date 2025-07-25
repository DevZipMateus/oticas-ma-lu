
import { Eye, Clock, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/13dc2faa-1f98-40b9-bdca-912079ba0670.png)'
        }}
      ></div>
      
      {/* Semi-transparent white overlay */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      {/* Background Pattern - Ajustado para não causar overflow */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-white/20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/15 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full bg-white/10 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6 sm:space-y-8 w-full">
            <div className="space-y-4 sm:space-y-6">
              <span className="inline-block text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 bg-white/20 text-black rounded-full backdrop-blur-sm">
                👓 Óticas Ma & Lu - Especialistas em Saúde Visual
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black font-heading">
                Cuidar da sua <br />
                <span className="text-black drop-shadow-lg">visão é a nossa</span><br />
                <span className="text-black drop-shadow-lg">missão</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black/90 max-w-2xl leading-relaxed font-semibold">
                Na Ótica Ma & Lu, oferecemos mais do que óculos: proporcionamos cuidado, 
                atenção e qualidade para sua saúde visual com profissionais especializados 
                e armações exclusivas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full">
              <a href="#contato" className="btn-primary text-center">
                Agendar Consulta
              </a>
              <a href="#servicos" className="btn-outline border-black text-black hover:bg-primary hover:text-black text-center">
                Nossos Serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 w-full">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black font-heading">15+</div>
                <div className="text-xs sm:text-sm text-black/80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black font-heading">1000+</div>
                <div className="text-xs sm:text-sm text-black/80">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black font-heading">100%</div>
                <div className="text-xs sm:text-sm text-black/80">Qualidade</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block w-full">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -top-8 -left-8 w-48 h-48 lg:w-64 lg:h-64 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 lg:w-48 lg:h-48 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="relative z-10 glass-card rounded-3xl p-6 lg:p-8 transform transition-all duration-500 hover:scale-[1.02] w-full">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-xl">
                    <Eye className="h-6 w-6 lg:h-8 lg:w-8 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Exames Completos</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Profissionais especializados</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-xl">
                    <Award className="h-6 w-6 lg:h-8 lg:w-8 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Armações Exclusivas</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Modernas e estilosas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-accent/10 rounded-xl">
                    <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Atendimento Rápido</h3>
                      <p className="text-xs lg:text-sm text-gray-600">Sem longas esperas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
