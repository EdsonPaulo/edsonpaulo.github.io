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
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            {...register("name")}
            placeholder="ex: Edson Gregório"
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl my="3" isRequired isInvalid={!!errors.email?.message}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            {...register("email")}
            placeholder="seunome@exemplo.com"
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.subject?.message}>
          <FormLabel htmlFor="subject">Assunto</FormLabel>
          <Input
            id="subject"
            {...register("subject")}
            placeholder="ex: trabalho de freelancer"
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
          />
          <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
        </FormControl>

        <FormControl my="3" isRequired isInvalid={!!errors.message?.message}>
          <FormLabel htmlFor="message">Mensagem</FormLabel>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Deixe aqui o sua mensagem..."
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
          />
          <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
        </FormControl>

        <Flex justifyContent="center">
          <Button
            mt={4}
            size="lg"
            type="submit"
            bg="accent"
            color="light"
            colorScheme="whiteAlpha"
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
