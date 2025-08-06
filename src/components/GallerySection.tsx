
import AnimatedSection from './AnimatedSection';
import GalleryCategory from './GalleryCategory';

const GallerySection = () => {
  const categories = [
    {
      title: 'Óculos com Adicional',
      description: 'Modelos especiais com tratamentos e funcionalidades extras',
      images: [
        '/oticasmalu/óculos com adicional/1071293618469602.jpeg',
        '/oticasmalu/óculos com adicional/1075130251419330.jpeg',
        '/oticasmalu/óculos com adicional/1158006043017936.jpeg',
        '/oticasmalu/óculos com adicional/1089838532680612.jpeg',
        '/oticasmalu/óculos com adicional/1735428477113330.jpeg',
        '/oticasmalu/óculos com adicional/1815284226055132.jpeg',
        '/oticasmalu/óculos com adicional/24259236110431814.jpeg',
        '/oticasmalu/óculos com adicional/1098638501693494.jpeg',
        '/oticasmalu/óculos com adicional/749325747830039.jpeg'
      ]
    },
    {
      title: 'Armações de Sol',
      description: 'Proteção e estilo para os dias ensolarados',
      images: [
        '/oticasmalu/armaçãodesol/1312673870476236.jpeg',
        '/oticasmalu/armaçãodesol/1001657241925241.jpeg',
        '/oticasmalu/armaçãodesol/744649528314378.jpeg',
        '/oticasmalu/armaçãodesol/1261006172066898.jpeg'
      ]
    },
    {
      title: 'Armações de Grau',
      description: 'Correção visual com design moderno e confortável',
      images: [
        '/oticasmalu/armaçãodegrau/787140827329770.jpeg',
        '/oticasmalu/armaçãodegrau/785043100749605.jpeg',
        '/oticasmalu/armaçãodegrau/3198567230293749.jpeg',
        '/oticasmalu/armaçãodegrau/2186967208443266.jpeg',
        '/oticasmalu/armaçãodegrau/657618880684886.jpeg',
        '/oticasmalu/armaçãodegrau/722829063859451.jpeg',
        '/oticasmalu/armaçãodegrau/727350110166330.jpeg'
      ]
    }
  ];

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title text-gray-900">
              Nossa Coleção de Armações
            </h2>
            <p className="section-subtitle">
              Descubra nossa variedade de armações exclusivas, cada uma cuidadosamente 
              selecionada para oferecer o melhor em estilo, qualidade e conforto
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16 sm:space-y-20">
          {categories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              delay={index * 200}
              animation="fade-in-up"
            >
              <GalleryCategory
                title={category.title}
                description={category.description}
                images={category.images}
                isReversed={index % 2 === 1}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
