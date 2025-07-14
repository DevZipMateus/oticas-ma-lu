
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. Entrei em contato através do site da Óticas Ma & Lu. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511969543234?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para cuidar da sua visão. Entre em contato conosco e agende sua consulta
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto mt-16">
          <AnimatedSection animation="fade-in-up">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 font-heading mb-2">
                  Fale Conosco
                </h3>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato via WhatsApp
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Como podemos ajudar você? Conte-nos sobre suas necessidades..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white resize-none"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-black rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem via WhatsApp
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  Ou entre em contato diretamente:
                </p>
                <div className="flex justify-center gap-6 mt-3">
                  <a 
                    href="tel:+5511969543234" 
                    className="text-gray-800 hover:text-gray-600 font-medium transition-colors"
                  >
                    (11) 96954-3234
                  </a>
                  <span className="text-gray-300">|</span>
                  <a 
                    href="mailto:maelu.oticas@gmail.com" 
                    className="text-gray-800 hover:text-gray-600 font-medium transition-colors"
                  >
                    E-mail
                  </a>
                </div>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
