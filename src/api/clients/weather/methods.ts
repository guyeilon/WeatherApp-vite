import weatherClient from 'api/clients/weather/client';
import * as Response from 'api/clients/weather/response';
import * as Transform from 'api/clients/weather/transform';
import * as Params from 'api/clients/weather/params';

const WeatherAPI = {
  getHourlyForecast: (locationKey?: number) =>
    weatherClient<Response.HourlyForecast[]>({
      url: `/forecasts/v1/hourly/12hour/${locationKey}`,
    }).then(Transform.hourlyForecast),
  getDailyForecast: (locationKey: number) =>
    weatherClient<Response.DailyForecasts>({
      url: `/forecasts/v1/daily/5day/${locationKey}`,
    }).then(Transform.dailyForecast),
  getAutocompleteCityName: (params: Params.CityString) =>
    weatherClient<Response.CityData[]>({
      url: '/locations/v1/cities/autocomplete',
      params,
    }).then(Transform.cityData),
  getLocationKey: (params: Params.GeoString) =>
    weatherClient<Response.PositionData>({
      url: '/locations/v1/cities/geoposition/search',
      params,
    }).then(Transform.locationData),
};

export default WeatherAPI;
