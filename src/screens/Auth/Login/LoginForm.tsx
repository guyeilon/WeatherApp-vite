import React from 'react';
import FormField from 'common/FormField/FormField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import Button from 'common/Button/Button';
import styled from 'styled-components';
import useLogin from 'screens/Auth/Login/hooks/useLogin';

interface LoginFormProps {}

export interface FormInputs {
  email: string;
  password: string;
}

const formSchema = yup.object().shape({
  email: yup.string().email().required('Required'),
  password: yup.string().required('Required').min(6),
});

const LoginForm: React.FC<LoginFormProps> = () => {
  const methods = useForm<FormInputs>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { authServerCallMutation, isLoading } = useLogin();

  const onSubmit = (data: FormInputs) => authServerCallMutation(data);

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <FormField label="email" name="email" type="email" placeholder="example@email.com..." autoComplete="off" />
        <FormField name="password" label="password" type="password" placeholder="6 characters and digit numbers..." />
        <Button
          color="primary"
          variant="filled"
          size="xl"
          disabled={!methods.formState.isValid}
          type="submit"
          isLoading={isLoading}
        >
          Log in
        </Button>
      </StyledForm>
    </FormProvider>
  );
};
const StyledForm = styled.form.attrs({ className: 'app-styled-form' })`
  display: flex;
  flex-direction: column;
  gap: 12px;
  button {
    margin-top: 8px;
  }
`;

export default LoginForm;
