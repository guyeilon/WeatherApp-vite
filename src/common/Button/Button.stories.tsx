import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'common/Button';

import { Facebook, FavDark, Google } from 'icons';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Choose the variant of the button',
      control: { type: 'radio' },
      name: 'Variant',
    },
    color: {
      description: 'Choose the  color of the button',
      control: { type: 'radio' },
      name: 'Color',
    },
    size: {
      description: 'Choose the  size of the button ',
      control: { type: 'radio' },
      name: 'Size',
    },
    type: {
      table: {
        disable: true,
      },
    },
    isLoading: {
      description: 'Select whether the button is loading or not',
      name: 'Loader',
    },
    disabled: {
      description: 'Choose whether the button is disabled',
      name: 'Disabled',
    },
    children: {
      description: 'The content of the button',
      name: 'Text',
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: 'Playground',
  variant: 'filled',
  size: 'lg',
  color: 'primary',
  disabled: false,
  isLoading: false,
};

export const Login = Template.bind({});
Login.args = {
  children: 'Log in',
  variant: 'filled',
  size: 'lg',
  color: 'primary',
  disabled: false,
  isLoading: false,
};

Login.argTypes = {
  disabled: {
    description: 'Choose whether the button is disabled',
    name: 'Disabled',
  },
};

Login.parameters = {
  backgrounds: { default: 'lightBack' },
};

export const FacebookLogin = Template.bind({});
FacebookLogin.args = {
  children: 'Log in with Facebook',
  variant: 'text',
  size: 'md',
  color: 'secondary',
  isLoading: false,
  icon: <Facebook width={30} height={30} />,
};

FacebookLogin.argTypes = {
  disabled: { control: { disable: true }, table: { disable: true } },
};

FacebookLogin.parameters = {
  backgrounds: { default: 'lightBack' },
};

export const GoogleLogin = Template.bind({});
GoogleLogin.args = {
  children: 'Log in with Google',
  variant: 'text',
  size: 'md',
  color: 'secondary',
  isLoading: false,
  icon: <Google width={30} height={30} />,
};

GoogleLogin.argTypes = {
  disabled: { control: { disable: true }, table: { disable: true } },
};

GoogleLogin.parameters = {
  backgrounds: { default: 'lightBack' },
};

export const LightAddToFavorites = Template.bind({});
LightAddToFavorites.args = {
  children: 'Add to favorites',
  variant: 'filled',
  size: 'lg',
  color: 'secondary',
  disabled: false,
  isLoading: false,
  icon: <FavDark />,
};

LightAddToFavorites.argTypes = {
  disabled: { control: { disable: true }, table: { disable: true } },
};

export const DarkAddToFavorites = Template.bind({});
DarkAddToFavorites.args = {
  children: 'Add to favorites',
  variant: 'outlined',
  size: 'lg',
  color: 'primary',
  disabled: false,
  isLoading: false,
};

DarkAddToFavorites.argTypes = {
  disabled: { control: { disable: true }, table: { disable: true } },
};
