import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import AuthSelector from 'store/selectors/auth.selectors';
import * as Action from 'store/reducers/auth.reducer';
import { Auth } from 'models/User';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(AuthSelector.auth, shallowEqual);
  const accessToken = useAppSelector(AuthSelector.accessToken);
  const refreshToken = useAppSelector(AuthSelector.refreshToken);

  const storeUserSession = (payload: Auth) => {
    dispatch(Action.storeUserSession(payload));
  };
  const logout = () => {
    dispatch(Action.logout());
  };

  const storeNewAccessToken = (payload: Pick<Auth, 'accessToken'>) => {
    dispatch(Action.refreshAccessToken(payload));
  };

  return { auth, accessToken, refreshToken, storeUserSession, storeNewAccessToken, logout };
};

export default useAuth;
