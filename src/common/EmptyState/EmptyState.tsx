import React from 'react';
import styled, { css } from 'styled-components';

interface EmptyStateProps
  extends React.PropsWithChildren<{
    title?: string;
    icon?: JSX.Element;
    variant: 'primary' | 'secondary';
  }> {}

const EmptyState: React.FC<EmptyStateProps> = ({ title, icon, variant, children }) => (
  <EmptyStateContainer variant={variant}>
    {icon}
    <h2 className="title">{title}</h2>
    <p className="content">{children}</p>
  </EmptyStateContainer>
);
export default EmptyState;

const EmptyStateContainer = styled.div.attrs({ className: 'app-emptyState-container' })<
  Pick<EmptyStateProps, 'variant'>
>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 64px 30px;

  ${({ variant }) =>
    ({
      primary: css`
        color: ${({ theme }) => theme.colors.text.primary};
      `,
      secondary: css`
        color: ${({ theme }) => theme.colors.text.secondary};
      `,
    }[variant])};

  .title {
    font-size: ${({ theme }) => theme.typography.sizes.h2};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);
  }
  .content {
    font-size: ${({ theme }) => theme.typography.sizes.p1};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    max-width: 476px;
    text-align: center;
  }

  svg {
    width: 120px;
    height: 120px;
    margin-bottom: 36px;
  }
`;
