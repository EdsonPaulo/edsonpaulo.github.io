import React, {
  createContext,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import rosetta from "rosetta";
import { Locales } from "../constants/enums";

import { I18nProps, I18nState } from "./i18n.types";

const i18n = rosetta();

export const selectPluralRule = (count: number) =>
  new Intl.PluralRules().select(count);

export const defaultLanguage: Locales = Locales.English;

export const I18nContext = createContext({} as I18nState);

i18n.locale(defaultLanguage);

export const I18n = forwardRef<I18nState, I18nProps>(
  ({ children, locale, langDictionary }, ref) => {
    const activeLocaleRef = useRef(locale || defaultLanguage);
    const [, setTick] = useState(0);
    const firstRender = useRef(true);

    const i18nWrapper: I18nState = {
      activeLocale: activeLocaleRef.current,
      t: (...args) => i18n.t(...args),
      locale: (l, dict) => {
        i18n.locale(l);
        activeLocaleRef.current = l;
        if (dict) i18n.set(l, dict);
        setTick((tick) => tick + 1);
      },
    };

    if (locale && firstRender.current === true) {
      firstRender.current = false;
      i18nWrapper.locale(locale, langDictionary);
    }

    useImperativeHandle(ref, () => i18nWrapper);

    useEffect(() => {
      if (locale) i18nWrapper.locale(locale, langDictionary);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [langDictionary, locale]);

    return (
      <I18nContext.Provider value={i18nWrapper}>
        {children}
      </I18nContext.Provider>
    );
  }
);
