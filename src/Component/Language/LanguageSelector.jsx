import React, { useEffect, useState } from "react";
import i18n from "../../i18n";

function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(savedLang);
    setCurrentLang(savedLang);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
  };

  return (
    <div className="flex gap-2 justify-center mb-2 text-black">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-2 py-1 rounded hover:bg-gray-200 ${
          currentLang === "en" ? "text-orange-500 font-semibold" : "text-black"
        }`}
      >
        🇺🇸 English
      </button>
      <button
        onClick={() => changeLanguage("bn")}
        className={`px-2 py-1 rounded hover:bg-gray-200 ${
          currentLang === "bn" ? "text-orange-500 font-semibold" : "text-black"
        }`}
      >
        🇧🇩 বাংলা
      </button>
    </div>
  );
}

export default LanguageSelector;
