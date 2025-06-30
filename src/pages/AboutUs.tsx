import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimationEffect from "@/components/AnimationEffect";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function AboutUs() {
  const { t, language } = useLanguage();

  const teamMembers = [
    {
      name: language === 'ar' ? 'م. محمد المهدي' : 'Mohamed El-Mahdi',
      position: language === 'ar' ? 'المدير التنفيذي' : 'CEO',
      bio: language === 'ar'
        ? 'يقود شركتنا برؤية استراتيجية وخبرة واسعة في إدارة الأعمال وتطوير المشاريع الرقمية.'
        : 'Leads our company with strategic vision and extensive experience in business management and digital project development.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mohamed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'أ. أحمد المهدي' : 'Ahmed El-Mahdi',
      position: language === 'ar' ? 'مؤسس مشارك' : 'Co-Founder',
      bio: language === 'ar'
        ? 'مؤسس مشارك يساهم في نمو الشركة وتطويرها من خلال خبرته العميقة في السوق.'
        : 'A co-founder contributing to the company\'s growth and development with his deep market expertise.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ahmed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'م. ممدوح الناجي' : 'Mamdouh El-Nagy',
      position: language === 'ar' ? 'مدير العمليات' : 'Operations Manager',
      bio: language === 'ar'
        ? 'يتولى إدارة العمليات اليومية لضمان سلاسة سير العمل وتحقيق الكفاءة القصوى.'
        : 'Manages daily operations to ensure smooth workflow and maximum efficiency.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mamdouh@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'أ. ناهد الطلاوي' : 'Nahed El-Tallawy',
      position: language === 'ar' ? 'مديرة التسويق' : 'Marketing Manager',
      bio: language === 'ar'
        ? 'خبيرة في استراتيجيات التسويق الرقمي وتطوير العلامات التجارية.'
        : 'An expert in digital marketing strategies and brand development.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'nahed@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'ا. محمود أبو الليل' : 'Mahmoud Aboul-Leil',
      position: language === 'ar' ? 'مدير التعاقدات' : 'Contracting Manager',
      bio: language === 'ar'
        ? 'يدير جميع جوانب التعاقدات لضمان أفضل الشراكات والاتفاقيات.'
        : 'Manages all aspects of contracting to ensure the best partnerships and agreements.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mahmoud@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'أ. سعد المصري' : 'Saad El-Masry',
      position: language === 'ar' ? 'مدير قسم التصوير' : 'Director of Photography Department',
      bio: language === 'ar'
        ? 'يقود فريق التصوير لتقديم محتوى بصري عالي الجودة لعملائنا.'
        : 'Leads the photography team to deliver high-quality visual content for our clients.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'saad@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'م. أحمد محمود' : 'Ahmed Mahmoud',
      position: language === 'ar' ? 'مدير التطوير' : 'Development Manager',
      bio: language === 'ar'
        ? 'يشرف على فريق التطوير لتقديم حلول تقنية متقدمة ومبتكرة.'
        : 'Oversees the development team to deliver advanced and innovative technical solutions.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'ahmed.m@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'م. عبدالرحمن وليد' : 'Abdelrahman Walid',
      position: language === 'ar' ? 'مدير فني ورئيس فريق الجرافيك' : 'Art Director and Graphic Team Lead',
      bio: language === 'ar'
        ? 'يقود الرؤية الإبداعية ويشرف على تصميماتنا البصرية لضمان أعلى مستوى من الجودة.'
        : 'Leads the creative vision and oversees our visual designs to ensure the highest quality.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'abdelrahman@ebusinessgate.com'
      }
    },
    {
      name: language === 'ar' ? 'ا. حنان صفوت' : 'Hanan Safwat',
      position: language === 'ar' ? 'مساعدة المدير' : 'Assistant Manager',
      bio: language === 'ar'
        ? 'تقدم الدعم الإداري اللازم لضمان كفاءة العمليات اليومية.'
        : 'Provides essential administrative support to ensure the efficiency of daily operations.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'hanan@ebusinessgate.com'
      }
    },
  ];

  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen overflow-x-hidden">
      <Header />

      <AnimationEffect animationType="fadeIn" delay={100}>
        <section className="about-hero-section py-16 md:py-24 bg-background dark:bg-dark-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">{t('about.title')}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground dark:text-dark-foreground">{t('about.subtitle')}</p>
          </div>
        </section>
      </AnimationEffect>

    {/* ///////////////////////////////////////////// */}
    <AboutSection />

      <AnimationEffect animationType="stagger" delay={300}>
        <section className="values-section py-16 bg-card dark:bg-dark-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground dark:text-dark-foreground text-center">{t('about.values.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-xl bg-background dark:bg-dark-background shadow text-center">
                <div className="mb-4 text-4xl">🏆</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{t('about.values.excellence')}</h3>
                <p className="text-secondary dark:text-dark-secondary">{t('about.values.excellenceDesc')}</p>
              </div>
              <div className="p-6 rounded-xl bg-background dark:bg-dark-background shadow text-center">
                <div className="mb-4 text-4xl">💡</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{t('about.values.innovation')}</h3>
                <p className="text-secondary dark:text-dark-secondary">{t('about.values.innovationDesc')}</p>
              </div>
              <div className="p-6 rounded-xl bg-background dark:bg-dark-background shadow text-center">
                <div className="mb-4 text-4xl">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{t('about.values.integrity')}</h3>
                <p className="text-secondary dark:text-dark-secondary">{t('about.values.integrityDesc')}</p>
              </div>
              <div className="p-6 rounded-xl bg-background dark:bg-dark-background shadow text-center">
                <div className="mb-4 text-4xl">🤝</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{t('about.values.collaboration')}</h3>
                <p className="text-secondary dark:text-dark-secondary">{t('about.values.collaborationDesc')}</p>
              </div>
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="slideUp" delay={400}>
        <section id="team" className="team-section py-16 bg-background dark:bg-dark-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground dark:text-dark-foreground text-center">{t('about.team.title')}</h2>
            <p className="mb-12 text-secondary dark:text-dark-secondary text-center">{t('about.team.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card dark:bg-dark-card shadow text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-foreground dark:text-dark-foreground">
                    {member.name}
                  </h3>
                  <p className="text-secondary dark:text-dark-secondary mb-2">
                    {member.position}
                  </p>
                  <p className="text-secondary dark:text-dark-secondary text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimationEffect>

      <AnimationEffect animationType="fadeIn" delay={500}>
        <section className="py-16 bg-gray-50 dark:bg-[#181818] text-white dark:text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''} text-primary dark:text-white`}>
              {language === 'ar' ? 'مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className={`text-xl mb-8 opacity-95 ${language === 'ar' ? 'font-arabic' : ''} text-gray-900 dark:text-white`}>
              {language === 'ar'
                ? 'دعنا نساعدك في تحويل أفكارك إلى واقع رقمي.'
                : 'Let us help you transform your ideas into digital reality'
              }
            </p>
            <Link to="/ContactUs">
              <Button
                className={`bg-white text-primary hover:bg-gray-200 font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 ${
                  language === 'ar' ? 'font-arabic' : ''
                }`}
              >
                {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
              </Button>
            </Link>
          </div>
        </section>
      </AnimationEffect>

      <Footer />
    </div>
  );
}