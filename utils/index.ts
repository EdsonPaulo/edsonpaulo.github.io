import { NextPageContext } from "next";
import nookies from "nookies";

import { Locales, LocalStorageKeys } from "../constants/enums";

export const storeCookie = (ctx: NextPageContext, key: string, value: string) =>
  nookies.set(ctx, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    sameSite: "Strict",
    path: "/",
  });

export const getI18nLocale = async (context: NextPageContext) => {
  const cookies = nookies.get(context);
  let locale = cookies[LocalStorageKeys.Language];

  if (!locale) {
    locale = Locales.English;
    storeCookie(context, LocalStorageKeys.Language, locale);
  }

  const { langDictionary = {} } = await import(`../i18n/${locale}`);
  return { locale, langDictionary };
};
