import React from 'react';
import StylesProvider from '../src/styles/StylesProvider';
import StoreProvider from '../src/store/Provider';

export const appViewPorts = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '414px',
      height: '800px',
    },
  },
  laptop: {
    name: 'laptop',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1920px',
      height: '800px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'darkMode',
        value: 'linear-gradient(189.57deg, #191634 0%, #1E437C 133.7%), #FFFFFF',
      },
      {
        name: 'lightMode',
        value: 'linear-gradient(189.57deg, #47BFDF 0%, #4A91FF 133.7%), #FFFFFF',
      },
      {
        name: 'navDark',
        value: '#1A2B55',
      },
      {
        name: 'navLight',
        value: '#48BAE4',
      },
    ],
    viewport: {
      viewports: appViewPorts,
    },
  },
};

export const decorators = [
  Story => (
    <StoreProvider>
      <StylesProvider>
        <Story />
      </StylesProvider>
    </StoreProvider>
  ),
];
