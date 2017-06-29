import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-router';
import PatchedStoryRouter from '../src/PatchedStoryRouter';

import Button from '../src/Button';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

storiesOf('Button with StoryRouter', module)
  .addDecorator(StoryRouter())
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

storiesOf('Button with PatchedStoryRouter', module)
  .addDecorator(PatchedStoryRouter())
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
