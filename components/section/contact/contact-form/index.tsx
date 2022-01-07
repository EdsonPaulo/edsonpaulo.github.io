import {
  Box,
  FormControl,
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
import { useTranslation } from "../../../../hooks";

const ContactForm: FC<ContactMessageFormProps> = ({
  onSubmitContactMessage,
  isSubmitting,
}) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactMessage>({
    resolver: yupResolver(ContactMessageSchema),
  });

  return (
    <Box flex={1}>
      <form onSubmit={handleSubmit(onSubmitContactMessage)}>
        <FormControl isRequired isInvalid={!!errors.name?.message}>
          <Input
            id="name"
            {...register("name")}
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
            placeholder={t("section.contact.name")}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl my="3" isRequired isInvalid={!!errors.email?.message}>
          <Input
            id="email"
            {...register("email")}
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
            placeholder={t("section.contact.email")}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.subject?.message}>
          <Input
            id="subject"
            {...register("subject")}
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
            placeholder={t("section.contact.subject")}
          />
          <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
        </FormControl>

        <FormControl my="3" isRequired isInvalid={!!errors.message?.message}>
          <Textarea
            id="message"
            {...register("message")}
            p="3"
            size="lg"
            bg="dark.500"
            fontSize="2xl"
            variant="unstyled"
            resize="vertical"
            placeholder={t("section.contact.message")}
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
            {t("section.contact.sendMessage")}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
