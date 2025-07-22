
import { Eye, Users, Award, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const features = [
    {
      icon: Eye,
      title: 'Especialistas Qualificados',
      description: 'Profissionais com anos de experiência em saúde visual'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção individual e cuidado especial'
    },
    {
      icon: Award,
      title: 'Produtos de Qualidade',
      description: 'Armações e lentes das melhores marcas do mercado'
    },
    {
      icon: Heart,
      title: 'Cuidado Completo',
      description: 'Acompanhamento desde o exame até a entrega dos óculos'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre a Óticas Ma & Lu</h2>
          <p className="section-subtitle">
            Há anos cuidando da saúde visual de nossa comunidade com dedicação e profissionalismo
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/cd76b6cd-6149-4d1b-b04b-a2dc90c828a8.png" 
                  alt="Óculos da marca Ma & Lu mostrando qualidade e estilo das armações" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block text-sm font-semibold py-2 px-4 bg-primary/10 text-black rounded-full">
                Nossa História
              </span>
              <h3 className="text-3xl font-bold text-gray-800 font-heading">
                Tradição e Inovação em Saúde Visual
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Na Ótica Ma & Lu, oferecemos mais do que óculos: proporcionamos cuidado, 
                atenção e qualidade para sua saúde visual. Realizamos exames de vista com 
                profissionais especializados e contamos com uma ampla variedade de armações 
                modernas, clássicas e estilosas.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Venha descobrir como é fácil unir conforto, precisão e beleza em um só olhar! 
                Nossa missão é garantir que você enxergue bem e se sinta ainda melhor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="btn-primary inline-block mt-6">
              Conheça Nossa Loja
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
