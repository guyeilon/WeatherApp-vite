export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type Auth = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
};
