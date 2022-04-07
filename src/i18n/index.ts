import en from "./locales/en.json";
import ar from "./locales/ar.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en,
    ar,
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
