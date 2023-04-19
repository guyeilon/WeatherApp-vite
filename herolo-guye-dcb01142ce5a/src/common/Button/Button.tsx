import { ReactNode, ButtonHTMLAttributes } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled, { css } from 'styled-components';

export interface ButtonProps extends StyledButtonProps {
  isLoading?: boolean;
  icon?: JSX.Element;
  children?: ReactNode;
  disabled?: boolean;
}

type Color = 'primary' | 'secondary';
type Variant = 'text' | 'filled' | 'outlined';
type Size = 'xl' | 'lg' | 'md' | 'sm';
interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  color: Color;
  size: Size;
  disabled?: boolean;
}

const buttonCustomProps = css`
  --primaryBg: ${({ theme }) => theme.colors.palette.gradientBlue};
  --secondaryBg: ${({ theme }) => theme.colors.palette.white};
  --outlineBg: transparent;
  --boxShadow: -0.25rem 0.5rem 3.125rem 0.25rem rgba(0, 0, 0, 0.16),
    inset 0.125rem -0.1875rem 0.375rem rgba(0, 0, 0, 0.1), inset -0.375rem 0.25rem 0.25rem rgba(255, 255, 255, 0.1);
  --borderRadius: 10px;
  --fontSize: ${({ theme }) => theme.typography.sizes.button};
  --fontWeight: ${({ theme }) => theme.typography.weights.bold};
  --padding: 16px 0;
`;

const defaultButton = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  cursor: pointer;
  white-space: nowrap;
  font-size: var(--fontSize);
  font-weight: var(--fontWeight);
  border-radius: var(--borderRadius);
  transition: 0.3s all ease;
  height: 3.375rem;
`;

const StyledButton = styled.button.attrs({ className: 'app-btn' })<StyledButtonProps>`
  ${buttonCustomProps};
  ${defaultButton}
  ${({ color }) =>
    ({
      primary: css`
        background: var(--primaryBg);
        color: ${({ theme }) => theme.colors.text.primary};
      `,
      secondary: css`
        background: var(--secondaryBg);
        color: ${({ theme }) => theme.colors.text.secondary};
      `,
    }[color])}
  ${({ variant }) =>
    ({
      filled: css``,
      outlined: css`
        background: unset;
        box-shadow: unset;
        color: ${({ theme }) => theme.colors.text.primary};
        outline: 2px solid ${({ theme }) => theme.colors.palette.white};
      `,
      text: css`
        background: unset;
        box-shadow: unset;
        text-decoration: underline;
        font-size: ${({ theme }) => theme.typography.sizes.link1};
        font-weight: ${({ theme }) => theme.typography.weights.medium};
      `,
    }[variant])};
  width: ${({ size }) =>
    ({
      xl: '354px',
      lg: '213px',
      md: '150px',
      sm: 'fit-content',
    }[size])};

  :disabled {
    color: rgba(255, 255, 255, 0.4);
  }

  .btn-innerWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

const Button = ({
  children,
  disabled,
  color = 'primary',
  icon,
  isLoading = false,
  variant,
  size = 'lg',
  className,
  ...args
}: ButtonProps): JSX.Element => (
  <StyledButton disabled={disabled} color={color} variant={variant} size={size} {...args}>
    {isLoading ? (
      <ThreeDots height="1.125rem" width="32px" color="black" />
    ) : (
      <span className="btn-innerWrapper">
        {icon && icon}
        {children}
      </span>
    )}
  </StyledButton>
);

export default Button;
