import { useQuery } from '@tanstack/react-query';
import WeatherAPI from 'api/clients/weather/methods';
import QueryKeys from 'api/queries/keys';
import { CityData } from 'models/Weather';

interface UseSearchCityReturn {
  options: CityData[];
  isLoading: boolean;
}

const useSearchCity = (search: string): UseSearchCityReturn => {
  const fallback: CityData[] = [];
  const { data: options = fallback, isLoading } = useQuery(
    [QueryKeys.Autocomplete, search],

    () => WeatherAPI.getAutocompleteCityName({ q: search }),
    {
      enabled: Boolean(search),
      cacheTime: Infinity,
      staleTime: Infinity,
    }
  );

  return {
    options,
    isLoading,
  };
};

export default useSearchCity;
