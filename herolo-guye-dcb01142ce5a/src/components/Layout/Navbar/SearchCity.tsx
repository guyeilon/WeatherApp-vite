import AutoComplete from 'common/AutoComplete/AutoComplete';
import OptionDisplay from 'common/AutoComplete/OptionDisplay';
import EmptyState from 'common/EmptyState/EmptyState';
import { City, SearchDark } from 'icons';
import React from 'react';
import useSearchCity from './hooks/useSearchCity';

interface SearchCityProps {}

const SearchCity: React.FC<SearchCityProps> = () => {
  const [query, setQuery] = React.useState<string>('');
  const { options, isLoading } = useSearchCity(query);

  return (
    <AutoComplete
      isLoading={isLoading}
      searchTerm={query}
      options={options}
      placeholder="Try  “Tel Aviv - Jaffa”..."
      icon={<SearchDark />}
      variant="primary"
      emptyState={
        <EmptyState variant="secondary" icon={<City />}>
          {query !== ''
            ? ` We couldn’t find any city named "${query}", please try again.`
            : `Please search any city in the search button.`}
        </EmptyState>
      }
      renderOption={option => <OptionDisplay option={option} key={option.key} />}
      onInputChange={setQuery}
    />
  );
};

export default SearchCity;
