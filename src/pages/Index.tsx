import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Globe',
      title: 'Разработка сайтов',
      description: 'Создаём современные веб-сайты с адаптивным дизайном и высокой производительностью'
    },
    {
      icon: 'ShoppingCart',
      title: 'Интернет-магазины',
      description: 'Полнофункциональные e-commerce решения с удобными системами оплаты и управления'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильные приложения',
      description: 'Разработка кросс-платформенных мобильных приложений для iOS и Android'
    },
    {
      icon: 'Palette',
      title: 'UX/UI дизайн',
      description: 'Современный дизайн интерфейсов с акцентом на удобство пользователей'
    },
    {
      icon: 'Search',
      title: 'SEO продвижение',
      description: 'Комплексная оптимизация сайта для поисковых систем и роста трафика'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка',
      description: 'Постоянная техническая поддержка и обновление ваших проектов'
    }
  ];

  const team = [
    {
      name: 'Алексей Морозов',
      role: 'CEO & Основатель',
      image: '👨‍💼',
      description: '10+ лет в веб-разработке'
    },
    {
      name: 'Мария Светлова',
      role: 'Lead Designer',
      image: '👩‍🎨',
      description: 'Эксперт в UX/UI дизайне'
    },
    {
      name: 'Дмитрий Волков',
      role: 'Tech Lead',
      image: '👨‍💻',
      description: 'Архитектор сложных систем'
    },
    {
      name: 'Анна Петрова',
      role: 'Project Manager',
      image: '👩‍💼',
      description: 'Управление проектами'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Waves" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-secondary">GreenWave Studio</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-primary transition-colors">Команда</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:block">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
            Создаём цифровые<br />
            <span className="text-primary">решения будущего</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Разрабатываем современные веб-сайты и приложения, которые помогают бизнесу расти и развиваться
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('contacts')} className="bg-primary hover:bg-primary/90">
              Начать проект
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-gray-600 text-lg">Полный цикл разработки от идеи до запуска</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">О компании</h2>
              <p className="text-gray-600 text-lg mb-6">
                GreenWave Studio — это команда профессионалов с многолетним опытом в создании веб-решений. 
                Мы специализируемся на разработке современных, функциональных и красивых сайтов.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Наша миссия — помогать бизнесу расти через качественные цифровые продукты. 
                Мы используем передовые технологии и лучшие практики индустрии.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl h-96 flex items-center justify-center animate-scale-in">
              <Icon name="Rocket" size={120} className="text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наша команда</h2>
            <p className="text-gray-600 text-lg">Профессионалы своего дела</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Свяжитесь с нами</h2>
              <p className="text-gray-600 text-lg mb-8">
                Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в течение 24 часов.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">hello@greenwave.studio</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-gray-600">Москва, ул. Тверская, д. 1</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4157515405836!2d37.61219031591804!3d55.75807998055475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0KLQstC10YDRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sus!4v1234567890123!5m2!1sru!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <Card className="animate-scale-in shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                <CardDescription>Заполните форму, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Waves" size={28} className="text-primary" />
                </div>
                <span className="text-2xl font-bold">GreenWave</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Создаём цифровые решения, которые помогают бизнесу расти
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Услуги</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">Разработка сайтов</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">Интернет-магазины</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">Мобильные приложения</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">UX/UI дизайн</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">SEO продвижение</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Компания</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">О нас</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">Команда</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">Портфолио</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">Карьера</li>
                <li className="text-gray-300 hover:text-white hover:translate-x-1 transition-all cursor-pointer">Блог</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Контакты</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <Icon name="Mail" size={18} className="text-primary mt-1" />
                  <span>hello@greenwave.studio</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Icon name="Phone" size={18} className="text-primary mt-1" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Icon name="MapPin" size={18} className="text-primary mt-1" />
                  <span>Москва, ул. Тверская, д. 1</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2024 GreenWave Studio. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}