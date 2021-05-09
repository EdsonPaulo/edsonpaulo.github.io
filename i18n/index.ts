export interface ILocaleTable {
  locale: string;
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
