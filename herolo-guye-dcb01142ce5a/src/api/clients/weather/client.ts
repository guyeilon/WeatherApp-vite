import axios from 'axios';
import environment from 'constants/config';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import createClient from 'api/client';

const config: AxiosRequestConfig = {
  baseURL: environment.forecastURL,
  params: {
    apikey: environment.accuWeatherAPIKEY,
    details: true,
  },
};

const instance: AxiosInstance = axios.create(config);

const weatherClient = createClient(instance);

export default weatherClient;
