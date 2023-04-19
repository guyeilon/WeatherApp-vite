import authClient from 'api/clients/auth/client';
import * as Payload from 'api/clients/auth/payload';
import * as Response from 'api/clients/auth/response';
import * as Transform from 'api/clients/auth/transform';
import { HTTPMethod } from 'api/types';

const AuthAPI = {
  loginWithAbraServer: (data: Payload.Credentials) =>
    authClient<Response.AbraServerLogin>({
      url: '/auth/login/',
      method: HTTPMethod.POST,
      data,
    }).then(Transform.abraServerLogin),
  googlLogin: (data: Payload.SocialCredentials) =>
    authClient<Response.AbraServerLogin>({
      url: '/auth/login/google/',
      method: HTTPMethod.POST,
      data,
    }).then(Transform.abraServerLogin),
  facebookLogin: (data: Payload.SocialCredentials) =>
    authClient<Response.AbraServerLogin>({
      url: '/auth/login/facebook/',
      method: HTTPMethod.POST,
      data,
    }).then(Transform.abraServerLogin),
  verifyToken: (data: Payload.Token) =>
    authClient<void>({
      url: '/auth/verify-token/',
      method: HTTPMethod.POST,
      data,
    }),
  refreshToken: (data: Payload.RefreshToken) =>
    authClient<Response.RefreshToken>({
      url: '/auth/refresh-token/',
      method: HTTPMethod.POST,
      data,
    }).then(Transform.refresh),
};

export default AuthAPI;
