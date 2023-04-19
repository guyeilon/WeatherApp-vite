import axios from 'axios';
import environment from 'constants/config';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import createClient from 'api/client';

const config: AxiosRequestConfig = {
  baseURL: environment.googleAPI,
  params: {
    key: environment.googleMAPKEY,
  },
};

const instance: AxiosInstance = axios.create(config);

const googleClient = createClient(instance);

export default googleClient;
