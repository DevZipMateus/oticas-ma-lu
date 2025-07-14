
import { Eye, Glasses, Scan, ShieldCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Eye,
      title: 'Exames de Vista Completos',
      description: 'Avaliação completa da sua saúde visual com equipamentos modernos e profissionais especializados para garantir o melhor diagnóstico.',
      features: ['Teste de acuidade visual', 'Medição de grau', 'Avaliação da saúde ocular', 'Orientações personalizadas']
    },
    {
      icon: Glasses,
      title: 'Armações Exclusivas',
      description: 'Ampla variedade de armações modernas, clássicas e estilosas das melhores marcas, com opções para todos os gostos e idades.',
      features: ['Marcas renomadas', 'Designs modernos', 'Armações infantis', 'Óculos de sol']
    },
    {
      icon: Scan,
      title: 'Lentes Especializadas',
      description: 'Lentes de alta qualidade com tecnologia avançada para proporcionar o máximo conforto e nitidez na sua visão.',
      features: ['Lentes antirreflexo', 'Proteção UV', 'Lentes progressivas', 'Lentes para computador']
    },
    {
      icon: ShieldCheck,
      title: 'Garantia e Suporte',
      description: 'Acompanhamento completo pós-venda com garantia e suporte técnico para ajustes e manutenção dos seus óculos.',
      features: ['Garantia de qualidade', 'Ajustes gratuitos', 'Limpeza profissional', 'Suporte técnico']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para cuidar da sua saúde visual com qualidade e profissionalismo
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description}
                features={service.features}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 font-heading">
              Pronto para cuidar da sua visão?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Agende sua consulta hoje mesmo e descubra como podemos ajudar você a enxergar melhor
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contato" className="btn-primary">
                Agendar Consulta
              </a>
              <a href="tel:+5511969543234" className="btn-secondary">
                Ligar Agora
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
