import * as Response from 'api/clients/weather/response';
import { CityData, DailyForecast, HourlyForecast } from 'models/Weather';

export const hourlyForecast = (hoursData: Response.HourlyForecast[]): HourlyForecast[] => {
  const hours = hoursData.map(hour => {
    const icon = hour?.WeatherIcon;
    const temp = hour?.Temperature?.Value;
    const wind = hour?.Wind?.Speed?.Value;
    const date = hour?.EpochDateTime;

    return { icon, temp, wind, date };
  });

  return hours;
};
export const dailyForecast = (daysData: Response.DailyForecasts): DailyForecast[] => {
  const days = daysData?.DailyForecasts.map(day => {
    const icon = day?.Day?.Icon;
    const dayTemp = day?.Temperature?.Maximum?.Value;
    const nightTemp = day?.Temperature?.Minimum?.Value;
    const dayPhrase = day?.Day?.IconPhrase;
    const nightPhrase = day?.Night?.IconPhrase;
    const date = day?.EpochDate;

    return { icon, dayTemp, nightTemp, dayPhrase, nightPhrase, date };
  });

  return days;
};

export const cityData = (cData: Response.CityData[]): CityData[] => {
  const cities = cData.map(city => {
    const key = city.Key;
    const cityName = city.LocalizedName;
    const countryName = city.Country.LocalizedName;
    return { key, cityName, countryName };
  });

  return cities;
};
export const locationData = (lData: Response.PositionData): CityData => {
  const key = lData.Key;
  const cityName = lData.LocalizedName;
  const countryName = lData.Country.LocalizedName;
  return { key, cityName, countryName };
};

const Transform = { hourlyForecast, dailyForecast, cityData, locationData };
export default Transform;
