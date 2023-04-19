import { useQuery } from '@tanstack/react-query';
import AuthAPI from 'api/clients/auth/methods';
import useAuth from 'hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { PublicPath } from 'routes/paths';

interface UseRefreshTokenReturn {
  isLoading: boolean;
}

const useRefreshToken = (): UseRefreshTokenReturn => {
  const { storeNewAccessToken, refreshToken, accessToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading } = useQuery(
    ['refreshToken'],
    () => AuthAPI.refreshToken({ refresh: refreshToken && refreshToken }),
    {
      enabled: !accessToken,
      cacheTime: 0,
      retry: false,
      onSuccess: data => {
        storeNewAccessToken({ accessToken: data.newAccessToken });
      },
      onError: () => {
        navigate(PublicPath.Login, { state: { from: location }, replace: true });
      },
    }
  );
  return { isLoading };
};

export default useRefreshToken;
