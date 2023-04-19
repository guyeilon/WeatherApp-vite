import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmptyState from 'common/EmptyState/EmptyState';
import { City, SearchDark } from 'icons';
import { CityData } from 'models/Weather';
import { useState } from 'react';
import AutoComplete from './AutoComplete';
import OptionDisplay from './OptionDisplay';

export default {
  title: 'AutoComplete',
  component: AutoComplete,
  parameters: {
    layout: 'top',
  },
  argTypes: {
    isLoading: {
      description: 'display loader when loading results',
    },
  },
} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = () => {
  const [query, setQuery] = useState<string>('');

  let filteredCities: CityData[] = [];

  if (query !== '') {
    filteredCities = data.filter(cityData => cityData.cityName.toLowerCase().includes(query.toLowerCase()));
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
      <AutoComplete
        searchTerm={query}
        options={filteredCities}
        placeholder="Try  “Tel Aviv - Jaffa”..."
        icon={<SearchDark />}
        variant="primary"
        emptyState={
          <EmptyState variant="secondary" icon={<City />}>
            We couldn’t find any city named &#34;{query}&#34;, please try again.
          </EmptyState>
        }
        renderOption={option => <OptionDisplay option={option} key={option.key} />}
        onInputChange={setQuery}
      />
    </div>
  );
};

const data: CityData[] = [
  { cityName: 'Tel Aviv', countryName: 'israel', key: '215854' },
  { cityName: 'Telanaipura', countryName: 'Indonesia', key: '226396' },
  { cityName: 'Telok Blangah New Town', countryName: 'Singapore', key: '106770' },
  { cityName: 'Telford', countryName: 'United Kingdom', key: '106770' },
  { cityName: 'Telavi', countryName: 'Georgia', key: '106770' },
  { cityName: 'Telsiai', countryName: 'Lithuania', key: '106770' },
  { cityName: 'Telégrafo', countryName: 'Brazil', key: '106770' },
  { cityName: 'Tela', countryName: 'Honduras', key: '106770' },
  { cityName: 'Telaga Asih', countryName: 'Indonesia', key: '106770' },
  { cityName: 'Telagamurni', countryName: 'Indonesia', key: '106770' },
];

export const Playground = Template.bind({});
Playground.args = {
  isLoading: true,
};
