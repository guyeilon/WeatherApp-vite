export type HourlyForecast = {
  icon: number;
  temp: number;
  wind: number;
  date: number;
};
export type DailyForecast = {
  icon: number;
  dayTemp: number;
  nightTemp: number;
  dayPhrase: string;
  nightPhrase: string;
  date: number;
};

export type CityData = {
  key: string;
  cityName: string;
  countryName: string;
};
