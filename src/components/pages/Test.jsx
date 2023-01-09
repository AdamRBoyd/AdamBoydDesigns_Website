import React from 'react';

import { Button, PageTitleFrame, Spacer } from '../../components';

const Test = () => {
  return (
    <PageTitleFrame title='Testing Page' noBottomRule>
      <Spacer padding={2} />
      <Button variant='primary' height={1}>
        Primary
      </Button>
      <Spacer padding={2} />
      <Button variant='secondary'>Secondary</Button>
      <Spacer padding={2} />
      <Button variant='tertiary'>Tertiary</Button>
      <Spacer padding={2} />
      <Button variant='ghost'>Ghost</Button>
      <Spacer padding={2} />
      <Button>Default</Button>
      <Spacer padding={2} />
      <Button variant='primary' disabled>
        Primary
      </Button>
      <Spacer padding={2} />
      <Button variant='secondary' disabled>
        Secondary
      </Button>
      <Spacer padding={2} />
      <Button variant='tertiary' disabled>
        Tertiary
      </Button>
      <Spacer padding={2} />
      <Button variant='ghost' disabled>
        Ghost
      </Button>
      <Spacer padding={2} />
      <Button disabled>Disabled</Button>
      <Spacer padding={2} />
    </PageTitleFrame>
  );
};

export default Test;
