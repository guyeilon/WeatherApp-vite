import { useUserPreference } from 'hooks';
import React from 'react';

import commonUtils from 'utils/common';

export interface TemperatureDisplayProps {
  value: number;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({ value }) => {
  const { isFahrenheit } = useUserPreference();
  const toggleTemperature = (temp: number) => (isFahrenheit ? temp : commonUtils.toCelsius(temp));

  return (
    <>
      {toggleTemperature(value)}
      <span>&deg;</span>
    </>
  );
};

export default TemperatureDisplay;
