import * as Response from 'api/clients/auth/response';
import { User } from 'models/User';

export const abraServerLogin = ({
  access_token,
  refresh_token,
  user,
}: Response.AbraServerLogin): { accessToken: string | null; refreshToken: string | null; user: User } => ({
  accessToken: access_token,
  refreshToken: refresh_token,
  user: {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  },
});

export const refresh = ({ access }: Response.RefreshToken): { newAccessToken: string } => ({
  newAccessToken: access,
});

const Transform = { abraServerLogin, refresh };
export default Transform;
