import { createRef } from 'react';

import { I18nState } from './i18n.types';

export const I18nRef = createRef<I18nState>();

export const translate: I18nState['t'] = (...args) => {
  if (I18nRef.current) return I18nRef.current.t(...args);
  return '';
};
