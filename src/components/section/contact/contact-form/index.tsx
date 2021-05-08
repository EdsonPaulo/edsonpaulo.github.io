import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ContactMessageFormProps,
  ContactMessageSchema,
  IContactMessage,
} from "./contact.types";

const ContactForm: FC<ContactMessageFormProps> = ({
  onSubmitContactMessage,
  isSubmitting,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactMessage>({
    resolver: yupResolver(ContactMessageSchema),
  });

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmitContactMessage)}>
        <FormControl isRequired isInvalid={!!errors.name?.message}>
          <FormLabel htmlFor="name">Seu Nome</FormLabel>
          <Input
            id="name"
            {...register("name")}
            placeholder="ex: Edson Gregório"
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.email?.message}>
          <FormLabel htmlFor="email">Seu Email</FormLabel>
          <Input
            id="email"
            {...register("email")}
            placeholder="seunome@exemplo.com"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.subject?.message}>
          <FormLabel htmlFor="subject">Assunto</FormLabel>
          <Input
            id="subject"
            {...register("subject")}
            placeholder="ex: Edson Gregório"
          />
          <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.message?.message}>
          <FormLabel htmlFor="message">Seu comentário</FormLabel>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Deixe aqui o seu comentário..."
          />
          <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>

        <Flex justifyContent="center">
          <Button
            mt={4}
            type="submit"
            colorScheme="red"
            alignSelf="flex-end"
            isLoading={isSubmitting}
          >
            Send message
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
