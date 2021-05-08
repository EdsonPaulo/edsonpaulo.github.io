import * as Yup from "yup";

export interface IContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactMessageSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome demasiado curto!")
    .max(50, "Nome muito longo!")
    .required("O nome é obrigatório"),
  email: Yup.string()
    .email("Email inválido. Informe um válido!")
    .required("O email é obrigatório"),
  subject: Yup.string()
    .min(3, "Assunto demasiado curto!")
    .max(50, "Assunto muito longo!")
    .required("O Assunto é obrigatório"),
  message: Yup.string()
    .min(3, "Mensagem demasiado curta!")
    .max(200, "Mensagem muito longa! (máx. 200 caractéres)")
    .required("Comente alguma coisa :)"),
});

export interface ContactMessageFormProps {
  onSubmitContactMessage: (payload: IContactMessage) => void;
  isSubmitting?: boolean;
}
