import { NextPageContext } from "next";
import nookies, { setCookie } from "nookies";

import { Languages, LocalStorageKeys } from "../constants/enums";

const cookieOptions = {
  maxAge: 30 * 24 * 60 * 60,
  sameSite: "Strict",
  path: "/",
};

export const storeLocaleCookie = (
  newLanguage: Languages,
  ctx?: NextPageContext
) => {
  ctx
    ? nookies.set(ctx, LocalStorageKeys.Language, newLanguage, cookieOptions)
    : setCookie(null, LocalStorageKeys.Language, newLanguage, cookieOptions);
};

export const getI18nLocale = async (ctx: NextPageContext) => {
  const cookies = nookies.get(ctx);
  let language = cookies[LocalStorageKeys.Language];

  if (
    !language ||
    (language !== Languages.English && language !== Languages.Portuguese)
  ) {
    language = Languages.English;
    storeLocaleCookie(Languages.English, ctx);
  }

  const { langDictionary = {} } = await import(`../i18n/${language}`);
  return { language, langDictionary };
};
