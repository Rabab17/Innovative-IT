import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadPortfolio = () => {
    // Create a dummy PDF download link
    const link = document.createElement("a");
    link.href = "#"; // In real implementation, this would be the actual PDF URL
    link.download = "E-Business-Gate-Portfolio.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show a toast notification (you can implement this with your toast system)
    console.log("Portfolio download initiated");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Enhanced Background with parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Gulf IT Business Office"
          className="w-full h-full object-cover scale-105 animate-slow-zoom parallax"
        />
        <div className="absolute inset-0 bg-black/70 dark:bg-black/80 z-10"></div>

        {/* Enhanced floating background circles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="floating-circle"
              style={{
                width: `${30 + Math.random() * 80}px`,
                height: `${30 + Math.random() * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-accent/50 dark:bg-accent/30 rounded-full animate-float"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + i * 6}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Content */}
      <div
        className={`container mx-auto px-4 z-20 text-center text-white`}
      >
        <div className="slide-line mb-8"></div>

        {/* Company Logo/Badge */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block bg-gradient-to-r from-accent to-yellow-400 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
            {language === "ar"
              ? "شركة رائدة في الابتكار الرقمي"
              : "Leading Digital Innovation Company"}
          </span>
        </div>

        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-white drop-shadow-2xl ${
            language === "ar" ? "font-arabic leading-tight" : ""
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {language === "ar" ? (
            <>
              <span className="block text-accent mb-2 drop-shadow-lg">التجارب المبتكرة لتقنية المعلومات</span>
              <span className="block text-white drop-shadow-lg">
                تمكين الشركات من خلال الابتكار الرقمي
              </span>
            </>
          ) : (
            <>
              <span className="block text-accent mb-2 drop-shadow-lg">Innovative IT Experiences</span>
              <span className="block text-white drop-shadow-lg">
                Empowering Businesses through Digital Innovation
              </span>
            </>
          )}
        </h1>

        <h2
          className={`text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto animate-fade-in-up text-white/95 font-light drop-shadow-lg ${
            language === "ar" ? "font-arabic leading-relaxed" : ""
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          {t("hero.subtitle")}
        </h2>

        {/* Enhanced CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${
            language === "ar" ? "sm:flex-row-reverse" : ""
          }`}
        >
          <Button
            onClick={scrollToServices}
            className="group shimmer-button bg-accent hover:bg-yellow-400 text-white font-bold px-8 py-6 text-lg rounded-full animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl transform-gpu min-w-[200px] shadow-lg"
            style={{ animationDelay: "0.7s" }}
          >
            {language === "ar" ? "اطلب خدمة الآن" : t("hero.cta")}
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                language === "ar" ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </Button>

          <Button
            onClick={downloadPortfolio}
            variant="outline"
            className="group bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-6 text-lg rounded-full animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px] shadow-lg"
            style={{ animationDelay: "0.9s" }}
          >
            <Download
              className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                language === "ar" ? "ml-2" : "mr-2"
              }`}
            />
            {language === "ar" ? "تحميل معرض أعمالنا" : "Download Our Portfolio"}
          </Button>
        </div>

        {/* Enhanced Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 animate-fade-in-up pb-20"
          style={{ animationDelay: "1.1s" }}
        >
          {[
            {
              icon: "🚀",
              title: language === "ar" ? "نمو متسارع" : "Fast Growth",
              desc: language === "ar" ? "زيادة في الأداء بنسبة 300%" : "300% Performance Boost",
            },
            {
              icon: "🎯",
              title: language === "ar" ? "دقة متناهية" : "Precision",
              desc: language === "ar" ? "حلول مصممة خصيصًا لكل عميل" : "Tailored Solutions",
            },
            {
              icon: "🏆",
              title: language === "ar" ? "جودة متميزة" : "Excellence",
              desc: language === "ar" ? "أكثر من 500 مشروع ناجح" : "500+ Successful Projects",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ animationDelay: `${1.3 + index * 0.2}s` }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className={`font-bold text-lg mb-2 text-white ${language === "ar" ? "font-arabic" : ""}`}>
                {feature.title}
              </h3>
              <p className={`text-sm text-white/90 ${language === "ar" ? "font-arabic" : ""}`}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced scroll indicator with bounce */}
        {/* <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="pulse-icon cursor-pointer pt-6" onClick={scrollToServices}>
            <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-accent hover:text-white transition-all duration-300">
              <svg
                className="w-6 h-6 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}