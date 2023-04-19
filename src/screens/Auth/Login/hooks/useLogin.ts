import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import AuthAPI from 'api/clients/auth/methods';
import { Credentials, SocialCredentials } from 'api/clients/auth/payload';
import useAuth from 'hooks/useAuth';
import { User } from 'models/User';
import { useLocation, useNavigate } from 'react-router-dom';
import { APIError } from 'api/types';
import { useToast } from 'hooks';

interface UseLoginReturn {
  authServerCallMutation: UseMutateFunction<User | unknown, unknown, Credentials, unknown>;
  loginWithGoogle: UseMutateFunction<User | unknown, unknown, SocialCredentials, unknown>;
  loginWithFacebook: UseMutateFunction<User | unknown, unknown, SocialCredentials, unknown>;
  isLoading: boolean;
  logout: VoidFunction;
}

type LocationProps = {
  state: {
    from: Location;
  };
};

const useLogin = (): UseLoginReturn => {
  const { storeUserSession, logout } = useAuth();
  const { fireToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;
  const from = location.state?.from.pathname || '/';

  const { mutate: authServerCallMutation, isLoading } = useMutation(
    (credentials: Credentials) => AuthAPI.loginWithAbraServer(credentials),

    {
      onSuccess: data => {
        storeUserSession(data);
        navigate(from, { replace: true });
      },
      onError: (err: APIError) => {
        fireToast({
          severity: 'error',
          title: err?.message ? `${err.message}` : 'Something went wrong',
          usePortal: false,
        });
      },
    }
  );
  const { mutate: loginWithGoogle } = useMutation(
    (credentials: SocialCredentials) => AuthAPI.googlLogin(credentials),

    {
      onSuccess: data => {
        storeUserSession(data);
        navigate(from, { replace: true });
      },
      onError: (err: APIError) => {
        fireToast({
          severity: 'error',
          title: err?.message ? `${err.message}` : 'Something went wrong',
          usePortal: false,
        });
      },
    }
  );

  const { mutate: loginWithFacebook } = useMutation(
    (credentials: SocialCredentials) => AuthAPI.facebookLogin(credentials),

    {
      onSuccess: data => {
        storeUserSession(data);
        navigate(from, { replace: true });
      },
      onError: (err: APIError) => {
        fireToast({
          severity: 'error',
          title: err?.message ? `${err.message}` : 'Something went wrong',
          usePortal: false,
        });
      },
    }
  );

  return { loginWithGoogle, loginWithFacebook, authServerCallMutation, logout, isLoading };
};

export default useLogin;
