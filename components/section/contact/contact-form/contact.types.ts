import * as Yup from "yup";

export interface IContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactMessageSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "min. 3")
    .max(50, "max. 50")
    .required("required"),
  email: Yup.string()
    .email("Email inválido. Informe um válido!")
    .required("required"),
  subject: Yup.string()
    .min(3, "min. 3")
    .max(50, "max. 50")
    .required("required"),
  message: Yup.string()
    .min(3, "min. 3")
    .max(400, "max. 400")
    .required("required"),
});

export interface ContactMessageFormProps {
  onSubmitContactMessage: (payload: IContactMessage) => void;
  isSubmitting?: boolean;
}
