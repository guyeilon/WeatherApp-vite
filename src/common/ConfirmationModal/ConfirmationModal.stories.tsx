import { ComponentMeta, ComponentStory } from '@storybook/react';

import ConfirmationModal from './ConfirmationModal';

const appViewPorts = {
  mobile: {
    name: 'Mobile',
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
  title: 'ConfirmationModal',
  component: ConfirmationModal,
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
    onCancel: {
      description: 'accept function that abort the action',
      table: {
        disable: true,
      },
    },
    onConfirm: {
      description: 'accept function that trigger an action',
      table: {
        disable: true,
      },
    },
    cancelTxt: {
      description: 'render the cancel button text',
    },
    confirmTxt: {
      description: 'render the confirm button text',
    },
  },

  parameters: {
    backgrounds: {
      default: 'darkMode',
    },
    viewport: {
      viewports: appViewPorts,
    },
  },
} as ComponentMeta<typeof ConfirmationModal>;

const Template: ComponentStory<typeof ConfirmationModal> = args => <ConfirmationModal {...args} />;

export const DesktopConfirmationModal = Template.bind({});
DesktopConfirmationModal.args = {
  title: 'Log out',
  children: <p>You about to log out from WeatherApp. Are you sure you want to log out?</p>,
  confirmTxt: 'Yes, log out',
  cancelTxt: 'I want to stay',
};
DesktopConfirmationModal.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};
export const MobileConfirmationModal = Template.bind({});
MobileConfirmationModal.args = {
  title: 'Remove from favorites',
  children: <p>Are you sure you want to remove Tel aviv Jaffo from favorites list?</p>,
  confirmTxt: 'Yes, remove',
  cancelTxt: 'Keep it',
};
MobileConfirmationModal.parameters = {
  viewport: { defaultViewport: 'mobile' },
};
