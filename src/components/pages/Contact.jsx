import React from 'react';

import { ContactForm, PageTitleFrame } from '../../components';

const Contact = () => {
  return (
    <PageTitleFrame title='Contact Me' noBottomRule>
      <ContactForm />
    </PageTitleFrame>
  );
};

export default Contact;
