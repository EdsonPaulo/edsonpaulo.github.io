import { ReactNode } from "react";
import { Rosetta } from "rosetta";
import { Locales } from "../constants/enums";

export interface I18nState {
  activeLocale: string;
  locale: (l: Locales, dict: any) => void;
  t: Rosetta<ILangDictionary>["t"];
}

export interface I18nProps {
  locale: Locales;
  langDictionary: Record<string, any>;
  children: ReactNode;
}

export interface ILangDictionary {
  locale: Locales;
  welcome: string;
  me: {
    firstname: string;
    firstSurname: string;
    fullname: string;
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    shortDescription: string;
  };
  nav: {
    about: string;
    skills: string;
    portfolio: string;
    history: string;
    contact: string;
    blog: string;
  };
  meta: {
    title: string;
    description: string;
  };
  footer: {
    createdBy: string;
  };
  section: {
    about: {
      title: string;
      subtitle: string;
      introduce: string;
    };
    skills: {
      title: string;
      subtitle: string;
    };
    history: {
      title: string;
      subtitle: string;
    };
    portfolio: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      formTitle: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      sendMessage: string;
    };
    blog: {
      title: string;
      subtitle: string;
    };
  };
}
