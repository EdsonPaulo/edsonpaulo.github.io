import { Locales } from "../constants/enums";
import { ILangDictionary } from "./i18n.types";

export const langDictionary: ILangDictionary = {
  locale: Locales.Portuguese,
  welcome: "Bem-vindo a festa!",
  me: {
    firstname: "Edson",
    firstSurname: "Edson Gregório",
    fullname: "Edson Paulo Gregório",
    email: "edsonpaulo24@gmail.com",
    phone: "+244 942 682 194",
    whatsapp: "+244 942 682 194",
    address: "Maianga, Luanda - Angola",
    shortDescription: "Desenvolvedor de apps web e mobile",
  },
  nav: {
    about: "Eu",
    skills: "Skills",
    portfolio: "Portfólio",
    history: "Histórico",
    contact: "Contacto",
    blog: "Blog",
  },
  meta: {
    title: "Edson Gregório - Desenvolvedor Web & Mobile",
    description:
      "Desenvolvedor aplicações web e mobile | Fullstack | Frontend | Backend | Apps (android e ios)",
  },
  footer: {
    createdBy: "Criado por EdsonPaulo com",
  },
  section: {
    about: {
      title: "Sobre mim",
      subtitle: "desenvolvedor web e mobile",
      introduce: "Olá, sou o",
    },
    skills: {
      title: "Minhas habilidades",
      subtitle: "",
    },
    history: {
      title: "Histórico profissional",
      subtitle: "",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Meus trabalhos",
    },
    contact: {
      title: "Me contactar",
      subtitle:
        "Se você alguma solicitação ou pergunta, não hesite em usar o formulário...",
      formTitle: "Formulário de contacto",
      name: "Nome e sobrenome",
      email: "Email",
      subject: "Subject",
      message: "Deixe sua mensagem aqui...",
      sendMessage: "Enviar mensagem",
    },
    blog: {
      title: "Blog",
      subtitle: "",
    },
  },
};
