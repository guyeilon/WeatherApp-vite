const toCelsius = (fahrenheit: number) => {
  const celsius = Math.round(((fahrenheit - 32) * 5) / 9);

  return celsius;
};

export const noop = () => {};

const commonUtils = { toCelsius, noop };
export default commonUtils;
