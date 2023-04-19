import { UserConfig } from 'vite';
import { ExtendedOptions } from '@storybook/builder-vite/types';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import fontsPlugin from 'vite-plugin-fonts';

export default {
  previewBody: body => `
    <div id="modal"></div>
    ${body}
  `,
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal(config: UserConfig, _options: ExtendedOptions) {
    config.cacheDir = 'node_modules/.vite-storybook';
    config.plugins = [
      ...(config.plugins ?? []),
      tsconfigPathsPlugin(),
      fontsPlugin({
        google: { families: ['Overpass'] },
      }),
    ];
    return config;
  },
};
