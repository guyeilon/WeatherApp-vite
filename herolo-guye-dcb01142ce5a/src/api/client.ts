import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HTTPMethod } from 'api/types';
import { handleErrorResponse } from 'api/errors';

const createClient = (instance: AxiosInstance) => {
  instance.interceptors.response.use((res: AxiosResponse) => res, handleErrorResponse);

  return <T>({ method = HTTPMethod.GET, url, data, ...rest }: AxiosRequestConfig): Promise<T> =>
    instance({
      method,
      url,
      data,
      ...rest,
    }).then((res: AxiosResponse<T>) => res.data);
};

export const createAuthHeaderSetter = (instance: AxiosInstance) => (token?: string) => {
  if (token) instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete instance.defaults.headers.common.Authorization;
  return token;
};

export default createClient;
