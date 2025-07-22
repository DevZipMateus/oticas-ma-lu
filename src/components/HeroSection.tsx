
import { Eye, Clock, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden"
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
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-white/20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/15"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 md:w-48 md:h-48 rounded-full bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-up" className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block text-sm font-semibold py-2 px-4 bg-white/20 text-black rounded-full backdrop-blur-sm">
                👓 Óticas Ma & Lu - Especialistas em Saúde Visual
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black font-heading">
                Cuidar da sua <br />
                <span className="text-black drop-shadow-lg">visão é a nossa</span><br />
                <span className="text-black drop-shadow-lg">missão</span>
              </h1>
              <p className="text-xl text-black/90 max-w-2xl leading-relaxed font-medium">
                Na Ótica Ma & Lu, oferecemos mais do que óculos: proporcionamos cuidado, 
                atenção e qualidade para sua saúde visual com profissionais especializados 
                e armações exclusivas.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contato" className="btn-primary">
                Agendar Consulta
              </a>
              <a href="#servicos" className="btn-outline border-black text-black hover:bg-primary hover:text-black">
                Nossos Serviços
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-heading">15+</div>
                <div className="text-sm text-black/80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-heading">1000+</div>
                <div className="text-sm text-black/80">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-heading">100%</div>
                <div className="text-sm text-black/80">Qualidade</div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/10 rounded-full filter blur-xl"></div>
              <div className="relative z-10 glass-card rounded-3xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-xl">
                    <Eye className="h-8 w-8 text-black" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Exames Completos</h3>
                      <p className="text-sm text-gray-600">Profissionais especializados</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-secondary/10 rounded-xl">
                    <Award className="h-8 w-8 text-black" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Armações Exclusivas</h3>
                      <p className="text-sm text-gray-600">Modernas e estilosas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-accent/10 rounded-xl">
                    <Clock className="h-8 w-8 text-black" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Atendimento Rápido</h3>
                      <p className="text-sm text-gray-600">Sem longas esperas</p>
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
