import React from 'react';

import ContactForm from '../organisms/ContactForm';
import PageTitleFrame from '../organisms/PageTitleFrame';

const Contact = () => {
  return (
    <PageTitleFrame title='Contact Me' noBottomRule>
      <ContactForm />
    </PageTitleFrame>
  );
};

export default Contact;
