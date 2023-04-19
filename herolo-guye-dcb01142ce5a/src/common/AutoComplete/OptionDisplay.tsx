import styled from 'styled-components';
import { CityData } from 'models/Weather';

const OptionDisplay = ({ option }: Record<'option', CityData>) => (
  <OptionWrapper>
    <p className="city">{option.cityName},</p>
    <p className="country"> {option.countryName} </p>
  </OptionWrapper>
);

export default OptionDisplay;

const OptionWrapper = styled.li.attrs({ className: 'app-option-display' })`
  display: flex;
  line-height: 30px;
  padding: 12px 36px;
  column-gap: 2px;
  text-transform: capitalize;
  cursor: pointer;
  font-size: 1.25rem;

  :hover {
    background-color: rgba(242, 242, 242, 0.8);
  }

  .city {
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .country {
    font-weight: ${({ theme }) => theme.typography.weights.regular};
    color: ${({ theme }) => theme.colors.palette.lightGray};
  }
`;
