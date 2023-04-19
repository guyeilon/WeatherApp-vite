import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icons?: { unchecked: ReactNode; checked: ReactNode };
  onChange?: VoidFunction;
  id: string;
}

const SwitchWrapper = styled.div.attrs({ className: 'app-switch-button' })`
  position: relative;
  width: 73px;
  height: 40px;
  border: solid 1px #444e72;
  background-color: #fff;
  border-radius: 100px;
  display: flex;
`;

const Handle = styled.label`
  position: absolute;
  left: 4px;
  top: 3px;
  border-radius: 100px;
  width: 32px;
  height: 32px;
  background-color: #838baa;

  z-index: 1;
  cursor: pointer;
`;
const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  &:checked + ${Handle} {
    left: 34px;
  }
`;

const IconsWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  svg {
    height: 24px;
    width: 24px;
  }
`;

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
  mass: 1.25,
};

const Switch: React.FC<SwitchProps> = ({ icons, onChange, id, checked, defaultChecked }) => (
  <SwitchWrapper>
    <CheckBox onChange={onChange} id={id} checked={checked} defaultChecked={defaultChecked} />
    <Handle as={motion.label} layout transition={spring} htmlFor={id} />
    <IconsWrapper>
      {icons?.unchecked ?? ' '} {icons?.checked ?? ' '}
    </IconsWrapper>
  </SwitchWrapper>
);

export default Switch;
