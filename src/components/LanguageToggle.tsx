import { useLanguage } from "@/contexts/LanguageContext";
import React from 'react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const currentFlagSrc = language === "ar" ? "https://flagcdn.com/sa.svg" : "https://flagcdn.com/gb.svg";
  const currentLangText = language === "ar" ? "AR" : "EN";
  const currentFlagAlt = language === "ar" ? "العربية" : "English";
  const nextLangText = language === "ar" ? "English" : "العربية";

  return (
    <button
      onClick={toggleLanguage}
      // أضفنا كلاس 'group' للزر لتفعيل تأثير الـ hover على العناصر الداخلية
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group"
      aria-label={`Switch language to ${nextLangText}`}
    >
      <img
        src={currentFlagSrc}
        alt={currentFlagAlt}
        className="w-6 h-6 rounded-full border ring-2 ring-primary object-cover"
      />
      {/* نص اللغة سيظهر بشكل دائم ويصبح بلون الـ primary عند الـ hover */}
      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">
        {currentLangText}
      </span>
    </button>
  );
}