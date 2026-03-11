import React from 'react';

import { NotificationProvider } from './src/context/AddItemNotificationProvider';
import { CartProvider } from './src/context/CartContext';

export const wrapRootElement = ({ element }) => (
  <NotificationProvider>
    <CartProvider>{element}</CartProvider>
  </NotificationProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-base"
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-17995104810"
    />,
    <script
      key="gtag-inline"
      dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17995104810');
        `,
      }}
    />,
  ]);
};

