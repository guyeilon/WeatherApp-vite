import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'common/Button';
import useToast from 'hooks/useToast';
import { FavDark } from 'icons';
import Toast from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  decorators: [
    Story => (
      <>
        <Toast />
        <Story />
      </>
    ),
  ],
  argTypes: {
    Toast: {
      description: 'fire toast using useToast hook',
      name: 'Tost',
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Button> = args => {
  const { fireToast } = useToast();

  return (
    <Button
      onClick={() =>
        fireToast({
          severity: 'success',
          title: 'Tel Aviv - Jaffa has added to favorites',
          usePortal: true,
        })
      }
      {...args}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  children: 'Add to favorites',
  variant: 'filled',
  size: 'lg',
  color: 'secondary',
  disabled: false,
  isLoading: false,
  icon: <FavDark />,
};

Playground.argTypes = {
  disabled: { control: { disable: true }, table: { disable: true } },
  children: { control: { disable: true }, table: { disable: true } },
  variant: { control: { disable: true }, table: { disable: true } },
  size: { control: { disable: true }, table: { disable: true } },
  isLoading: { control: { disable: true }, table: { disable: true } },
  icon: { control: { disable: true }, table: { disable: true } },
  color: { control: { disable: true }, table: { disable: true } },
};
