import React from 'react';

import { Button, PageTitleFrame, Spacer } from '../../components';

const Test = () => {
  return (
    <PageTitleFrame title='Testing Page' noBottomRule>
      <Spacer padding='large' />
      <Button variant='primary' height={1}>
        Primary
      </Button>
      <Spacer padding='large' />
      <Button variant='secondary'>Secondary</Button>
      <Spacer padding='large' />
      <Button variant='tertiary'>Tertiary</Button>
      <Spacer padding='large' />
      <Button variant='ghost'>Ghost</Button>
      <Spacer padding='large' />
      <Button>Default</Button>
      <Spacer padding='large' />
      <Button variant='primary' disabled>
        Primary
      </Button>
      <Spacer padding='large' />
      <Button variant='secondary' disabled>
        Secondary
      </Button>
      <Spacer padding='large' />
      <Button variant='tertiary' disabled>
        Tertiary
      </Button>
      <Spacer padding='large' />
      <Button variant='ghost' disabled>
        Ghost
      </Button>
      <Spacer padding='large' />
      <Button disabled>Disabled</Button>
      <Spacer padding='large' />
    </PageTitleFrame>
  );
};

export default Test;
