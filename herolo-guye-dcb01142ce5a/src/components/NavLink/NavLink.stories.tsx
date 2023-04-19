import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Fav, FavFull, HomeFull, HomeOutline } from 'icons';
import NavLink from 'components/NavLink';

export default {
  title: 'NavLink',
  component: NavLink,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  parameters: {
    backgrounds: { default: 'darkMode' },
  },
  argTypes: {
    icon: {
      name: 'Icon',
      description: 'render icon svg by active/inactive route',
    },
    to: {
      name: 'To',
      description: 'accept route name',
    },
    label: {
      name: 'Label',
      description: 'render link label',
    },
  },
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = () => (
  <div style={{ display: 'flex', height: '50px' }}>
    <NavLink icon={{ active: <HomeFull />, inactive: <HomeOutline /> }} to="/" label="home" />
    <NavLink icon={{ active: <FavFull />, inactive: <Fav /> }} to="favorites" label="favorites" />
  </div>
);

export const Playground = Template.bind({});
Playground.args = {};
