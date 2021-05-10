import { useContext } from 'react';

import { I18nContext } from '../i18n';

export default function useTranslation() {
  return useContext(I18nContext);
}
