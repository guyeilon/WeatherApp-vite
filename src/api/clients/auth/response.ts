type Token = Record<'access_token' | 'refresh_token', string>;

type User = {
  id: number;
  email: string;
  api_key: string;
  first_name: string;
  last_name: string;
};

export type AbraServerLogin = Token & Record<'user', User>;

export type RefreshToken = Record<'access', string>;
