export type Token = Record<'token', string>;

export type Credentials = {
  email: string;
  password: string;
};

export type RefreshToken = Record<'refresh', string | null>;

export type SocialCredentials = Record<'access_token', string>;
