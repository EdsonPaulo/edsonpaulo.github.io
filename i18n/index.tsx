import React, {
  createContext,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import rosetta from "rosetta";
import { Languages } from "../constants/enums";

import { I18nProps, I18nState } from "./i18n.types";

const i18n = rosetta();

export const selectPluralRule = (count: number) =>
  new Intl.PluralRules().select(count);

export const defaultLanguage: Languages = Languages.English;

export const I18nContext = createContext({} as I18nState);

i18n.locale(defaultLanguage);

export const I18n = forwardRef<I18nState, I18nProps>(
  ({ children, language, langDictionary }, ref) => {
    const activeLanguageRef = useRef(language || defaultLanguage);
    const [, setTick] = useState(0);
    const firstRender = useRef(true);

    const i18nWrapper: I18nState = {
      activeLanguage: activeLanguageRef.current,
      t: (...args) => i18n.t(...args),
      locale: (l, dict) => {
        i18n.locale(l);
        activeLanguageRef.current = l;
        if (dict) i18n.set(l, dict);
        setTick((tick) => tick + 1);
      },
    };

    if (language && firstRender.current === true) {
      firstRender.current = false;
      i18nWrapper.locale(language, langDictionary);
    }

    useImperativeHandle(ref, () => i18nWrapper);

    useEffect(() => {
      if (language) i18nWrapper.locale(language, langDictionary);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [langDictionary, language]);

    return (
      <I18nContext.Provider value={i18nWrapper}>
        {children}
      </I18nContext.Provider>
    );
  }
);
