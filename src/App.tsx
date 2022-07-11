import React from 'react';
import { useTranslation } from 'react-i18next';
import GlobalStyle from './core/style/globalStyle';

export function App(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('title')}</h1>

      <GlobalStyle />
    </>
  );
}
