import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavTabs from 'components/NavTabs';
import { Fav, FavFull, HomeFull, HomeOutline, Search } from 'icons';
import { NavTabProps } from 'components/NavTabs/NavTab';
import { BrowserRouter as Router } from 'react-router-dom';
import commonUtils from 'utils/common';

export default {
  title: 'NavTabs',
  component: NavTabs,
  decorators: [
    Story => (
      <Router>
        <Story />
      </Router>
    ),
  ],
  parameters: {
    backgrounds: { default: 'darkMode' },
    layout: 'bottom',
  },
  argTypes: {
    tabsList: {
      name: 'tabsList',
      description: 'An array that contain props such as:  render as link or button, icons, label as children',
    },
  },
} as ComponentMeta<typeof NavTabs>;

const tabsList: NavTabProps[] = [
  {
    renderAs: 'link',
    to: '/',
    icon: { active: <HomeFull />, inactive: <HomeOutline /> },
    children: 'home',
  },
  {
    renderAs: 'button',
    onClick: commonUtils.noop,
    icon: { active: <Search />, inactive: <Search /> },
    children: 'Search',
  },
  {
    renderAs: 'link',
    to: 'favorites',
    icon: { active: <FavFull />, inactive: <Fav /> },
    children: 'favorites',
  },
];

const Template: ComponentStory<typeof NavTabs> = args => <NavTabs {...args} />;

export const Playground = Template.bind({});
Playground.args = { tabsList };
