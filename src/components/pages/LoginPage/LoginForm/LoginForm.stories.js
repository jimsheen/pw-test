import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LoginForm from './LoginForm';

const defaultProps = {
   onSubmit: action('onSubmit'),
}
storiesOf('pages.LoginPage.LoginForm', module)
  .add('default', () => <LoginForm { ...defaultProps } />)
