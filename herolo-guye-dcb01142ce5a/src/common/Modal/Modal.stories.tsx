import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from 'common/Modal';

const appViewPorts = {
  mobile: {
    name: 'mobile',
    styles: {
      width: '413px',
      height: '500px',
    },
  },

  desktop: {
    name: 'desktop',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
};

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
      name: 'Children',
      description: 'The content of the modal',
      table: {
        disable: true,
      },
    },

    height: {
      name: 'Height',
      description: 'Modal height on desktop',
      defaultValue: 'auto',
    },
    width: {
      name: 'Width',
      description: 'Modal width',
      defaultValue: '502px',
    },

    onClose: {
      description: 'accept function that close the modal',
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'lightMode',
    },
    viewport: {
      viewports: appViewPorts,
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const DesktopModal = Template.bind({});
DesktopModal.args = {
  title: 'Remove from favorites',
  children: <p>render any children text or JSX</p>,
};
DesktopModal.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};
export const MobileModal = Template.bind({});
MobileModal.args = {
  children: <p>render any children text or JSX </p>,
  title: 'Five days forecast',
};
MobileModal.parameters = {
  viewport: { defaultViewport: 'mobile' },
};
