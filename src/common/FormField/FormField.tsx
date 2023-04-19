import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormField: React.FC<InputProps> = ({ label, type, placeholder }) => {
  const {
    formState: { errors, touchedFields },
    register,
  } = useFormContext<Record<string, string>>();

  return (
    <InputWrapper>
      <InputField isError={!!errors[label]?.message && touchedFields[label]}>
        <label htmlFor={label}>{label}</label>
        <StyledInput type={type} id={label} placeholder={placeholder} autoComplete="off" {...register(label)} />
      </InputField>
      <HelpMessage>{errors[label]?.message && touchedFields[label] ? errors[label]?.message : ''}</HelpMessage>
    </InputWrapper>
  );
};

export default FormField;

const InputWrapper = styled.div.attrs({ className: 'app-' })`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.div.attrs({
  className: 'app-input',
})<{ isError: boolean | undefined }>`
  padding: 14px 24px;
  max-height: 77px;
  width: 354px;
  background-color: ${({ theme }) => theme.colors.palette.darkWhite};
  border: solid 1px transparent;
  border-radius: 10px;
  :focus-within {
    border: solid 1px #222222;
    background-color: ${({ theme }) => theme.colors.palette.white};
  }
  margin-bottom: 4px;
  label {
    width: 100%;
    font-size: ${({ theme }) => theme.typography.sizes.p2};
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.palette.lightGray};
    text-transform: capitalize;
  }

  ${({ isError }) =>
    isError &&
    css`
      border: solid 1px ${({ theme }) => theme.colors.status.error};
      :focus-within {
        border: solid 1px ${({ theme }) => theme.colors.status.error};
      }
      label {
        color: ${({ theme }) => theme.colors.status.error};
      }
    `};
`;

const HelpMessage = styled.p`
  color: ${({ theme }) => theme.colors.status.error};
  font-size: ${({ theme }) => theme.typography.sizes.p2};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  height: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 27px;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.typography.sizes.p1};
  color: ${({ theme }) => theme.colors.palette.black};
  ::placeholder {
    color: ${({ theme }) => theme.colors.palette.gray};
  }

  :focus-within {
    color: ${({ theme }) => theme.colors.palette.darkGray};
  }
`;
