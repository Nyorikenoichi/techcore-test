import React from 'react';
import GlobalStyle from './core/style/globalStyle';
import { NavigationMenu } from './core/components/NavigationMenu/navigationMenu';
import { NavigationSubMenu } from './core/components/navigationSubMenu/navigationSubMenu';

export function App(): JSX.Element {
  return (
    <>
      <NavigationMenu />
      <NavigationSubMenu />
      <GlobalStyle />
    </>
  );
}
