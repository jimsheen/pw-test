import React from 'react';

import { storiesOf } from '@storybook/react';

import LoadingSpinner from './LoadingSpinner';

storiesOf('UI.LoadingSpinner', module)
  .add('default', () => <LoadingSpinner />)
