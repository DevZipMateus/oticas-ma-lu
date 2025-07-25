
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      ></div>
      
      {/* Semi-transparent white overlay */}
      <div className="absolute inset-0 bg-white/50"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-white/20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/15 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full bg-white/10 transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-6 sm:space-y-8 w-full">
            <div className="space-y-6 sm:space-y-8">
              <span className="inline-block text-sm sm:text-base font-medium py-3 px-6 bg-primary/90 text-black rounded-full backdrop-blur-sm shadow-lg border border-primary/20">
                👓 Óticas Ma & Lu - Especialistas em Saúde Visual
              </span>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900 font-heading tracking-tight">
                  Cuidar da sua{' '}
                  <span className="text-gray-800 relative">
                    visão
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/60 rounded-full"></div>
                  </span>
                </h1>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 font-heading tracking-tight">
                  é a nossa{' '}
                  <span className="text-gray-800 relative">
                    missão
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/60 rounded-full"></div>
                  </span>
                </h2>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed font-medium">
                Na Ótica Ma & Lu, oferecemos mais do que óculos: proporcionamos{' '}
                <span className="text-gray-900 font-semibold">cuidado</span>,{' '}
                <span className="text-gray-900 font-semibold">atenção</span> e{' '}
                <span className="text-gray-900 font-semibold">qualidade</span>{' '}
                para sua saúde visual com profissionais especializados 
                e armações exclusivas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 w-full">
              <a href="#contato" className="btn-primary text-center text-lg font-semibold">
                Agendar Consulta
              </a>
              <a href="#servicos" className="btn-outline border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-center text-lg font-semibold">
                Nossos Serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10 w-full">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading">15+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium mt-1">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading">1000+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium mt-1">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-heading">100%</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium mt-1">Qualidade</div>
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
