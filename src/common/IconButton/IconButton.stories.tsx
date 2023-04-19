import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from 'common/IconButton';
import { FavFull, Map, Logout, Menu } from 'icons';

export default {
  title: 'Icon button',
  component: IconButton,
  parameters: {
    icon: {},
    backgrounds: { default: 'darkMode' },
  },
  argTypes: {
    icon: {
      name: 'Icon',
      description: 'render any icon as JSX element',
      control: { disable: true },
    },
    width: {
      name: 'Width',
      description: 'Choose the width of the button',
      control: { disable: true },
    },
    height: {
      name: 'Height',
      description: 'Choose the height of the button',
      control: { disable: true },
    },
    onClick: { action: 'clicked', control: { disable: true } },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => <IconButton {...args} />;

export const FavoritesBtn = Template.bind({});
FavoritesBtn.args = {
  icon: <FavFull width="30px" height="30ox" />,
};
export const MapBtn = Template.bind({});
MapBtn.args = {
  icon: <Map width="30px" height="30px" />,
};
export const LogoutBtn = Template.bind({});
LogoutBtn.args = {
  icon: <Logout width="30px" height="30px" />,
};
export const MenuBtn = Template.bind({});
MenuBtn.args = {
  icon: <Menu width="30px" height="30px" />,
};
