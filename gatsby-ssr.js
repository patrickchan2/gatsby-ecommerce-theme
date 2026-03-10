import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import { CartProvider } from './src/context/CartContext';
import { LanguageProvider } from './src/context/LanguageContext';

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>
    <NotificationProvider>
      <CartProvider>{element}</CartProvider>
    </NotificationProvider>
  </LanguageProvider>
);

