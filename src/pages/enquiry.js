import React, { useEffect } from 'react';

const WHATSAPP_URL = 'https://wa.me/85246450535';

const EnquiryPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = WHATSAPP_URL;
    }
  }, []);

  return null;
};

export default EnquiryPage;

