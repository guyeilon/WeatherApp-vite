import React from 'react';
import styled, { css } from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  variant: 'primary' | 'secondary';
}

const Input: React.FC<InputProps> = ({ icon, variant, ...rest }) => (
  <InputWrapper variant={variant}>
    <StyledInput variant={variant} {...rest} />
    {icon}
  </InputWrapper>
);

export default Input;

export const InputWrapper = styled.label.attrs({ className: 'input-wrapper' })<Pick<InputProps, 'variant'>>`
  position: relative;
  width: 372px;
  height: 54px;
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(211, 26, 26, 0.1);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  svg {
    position: absolute;
    right: 24px;
    top: 14px;
    width: 30px;
    height: 30px;
  }
  ${({ variant }) =>
    ({
      primary: css`
        background-color: ${({ theme }) => theme.colors.palette.white};
      `,
      secondary: css`
        background-color: rgba(255, 255, 255, 0.3); ;
      `,
    }[variant])};
`;

export const StyledInput = styled.input<Pick<InputProps, 'variant'>>`
  width: 70%;
  border: none;
  margin-left: 24px;
  font-size: ${({ theme }) => theme.typography.sizes.button};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.palette.black};

  ::placeholder {
    color: ${({ theme }) => theme.colors.palette.gray};
    font-size: ${({ theme }) => theme.typography.sizes.button};
    font-weight: bold;
  }
  ${({ variant }) =>
    ({
      primary: css`
        font-size: ${({ theme }) => theme.typography.sizes.button};
        font-weight: ${({ theme }) => theme.typography.weights.bold};
        color: ${({ theme }) => theme.colors.palette.black};
        ::placeholder {
          color: ${({ theme }) => theme.colors.palette.gray};
          font-size: ${({ theme }) => theme.typography.sizes.button};
          font-weight: bold;
        }
      `,
      secondary: css`
        font-size: ${({ theme }) => theme.typography.sizes.button};
        font-weight: ${({ theme }) => theme.typography.weights.bold};
        color: ${({ theme }) => theme.colors.palette.black};
        ::placeholder {
          color: ${({ theme }) => theme.colors.palette.white};
          font-size: ${({ theme }) => theme.typography.sizes.button};
          font-weight: bold;
        }
      `,
    }[variant])};
`;
