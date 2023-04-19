import React from 'react';
import styled from 'styled-components';

interface StyledProps {
  width?: string;
  height?: string;
}

interface IconButtonProps extends StyledProps {
  icon: JSX.Element;
  onClick: VoidFunction;
}

const StyledIconButton = styled.button.attrs({
  className: 'app-iconButton',
})<StyledProps>`
  height: ${({ height }) => height || '30px'};
  width: ${({ width }) => width || '30px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: transparent;
`;

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, width, height, ...args }) => (
  <StyledIconButton onClick={onClick} width={width} height={height} {...args}>
    {icon}
  </StyledIconButton>
);

export default IconButton;
