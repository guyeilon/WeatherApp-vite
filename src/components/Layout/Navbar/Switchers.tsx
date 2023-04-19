import Switch from 'common/Switch/Switch';
import { useUserPreference } from 'hooks';
import { Celsius, Fahrenheit, Moon, Sun } from 'icons';
import React from 'react';
import styled from 'styled-components';

interface SwitchersProps {}

const Switchers: React.FC<SwitchersProps> = () => {
  const { toggleDegree, toggleTheme, isDarkMode, isFahrenheit } = useUserPreference();
  return (
    <SwitchersWrapper>
      <Label>Change mode</Label>
      <Switch
        id="theme"
        icons={{ unchecked: <Sun />, checked: <Moon /> }}
        onChange={() => toggleTheme()}
        checked={!isDarkMode}
      />
      <Label>Change degrees</Label>
      <Switch
        id="degree"
        icons={{ unchecked: <Fahrenheit />, checked: <Celsius /> }}
        onChange={() => toggleDegree()}
        checked={isFahrenheit}
      />
    </SwitchersWrapper>
  );
};

export default Switchers;
const Label = styled.div.attrs({ className: 'app-switcher-label' })`
  display: none;
`;

const SwitchersWrapper = styled.div.attrs({ className: 'app-switchers-wrapper' })`
  display: flex;
  gap: 30px;

  @media ${({ theme }) => theme.breakpoints.max.mobile} {
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-row: repeat(2, fit-content(100%));
    margin-bottom: 120px;
    & > .app-switcher-label {
      display: block;
      align-self: center;
    }

    .app-switch-button {
      justify-self: end;
    }
  }
`;
