import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import FormField from 'common/FormField/FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface FormInputs {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required('Required'),
});

const FormFieldProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const methods = useForm<FormInputs>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>{children} </form>
    </FormProvider>
  );
};

export default {
  title: 'FormField',
  component: FormField,
  argTypes: {
    type: {
      description: 'Choose the type of the input',
      control: { type: 'radio', options: ['email', 'password'] },
      name: 'Type',
    },
    label: {
      description: 'Choose the label of the input',
      control: { type: 'radio', options: ['email', 'password'] },
      name: 'Label',
    },
    placeholder: {
      description: 'Insert  the place holder shown in  the input',
      control: { type: 'radio', options: ['exemple@email.com...', '6 characters and digit numbers...'] },
      name: 'Placeholder',
    },
    name: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    Story => (
      <FormFieldProvider>
        <Story />
      </FormFieldProvider>
    ),
  ],
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = args => <FormField {...args} />;

export const Email = Template.bind({});
Email.args = {
  label: 'email',
  type: 'email',
  placeholder: 'exemple@email.com...',
};

Email.argTypes = {
  disabled: { control: { disable: true }, table: { disable: true } },
};
export const Password = Template.bind({});
Password.args = {
  label: 'password',
  type: 'password',
  placeholder: '6 characters and digit numbers...',
};

Password.argTypes = {
  disabled: { control: { disable: true }, table: { disable: true } },
};
