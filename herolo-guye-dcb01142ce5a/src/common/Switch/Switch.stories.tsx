import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from 'common/Switch';
import { useUserPreference } from 'hooks';

import { Moon, Sun } from 'icons';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    icons: {
      description: 'render SVGs as icons',
      control: {
        disable: true,
      },
    },
    onChange: {
      description: 'function that come from hook : useUserPreference',
      control: {
        disable: true,
      },
    },
    id: {
      description: 'connect the labe with the input',
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => {
  const { isDarkMode, toggleTheme } = useUserPreference();

  return <Switch {...args} onChange={() => toggleTheme()} checked={isDarkMode} />;
};

export const ThemeSwitch = Template.bind({});

ThemeSwitch.args = {
  icons: { unchecked: <Sun />, checked: <Moon /> },
  id: 'theme',
};
