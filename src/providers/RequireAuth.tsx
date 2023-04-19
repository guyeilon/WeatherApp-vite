import { Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { ThreeDots } from 'react-loader-spinner';
import useRefreshToken from 'hooks/useRefreshToken';

const RequireAuth = () => {
  const { accessToken, refreshToken } = useAuth();

  return accessToken && refreshToken ? <Outlet /> : <PersistLogin />;
};
export default RequireAuth;

const PersistLogin = () => {
  const { isLoading } = useRefreshToken();

  return isLoading ? (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#fff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'fixed',
        zIndex: '9999',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      visible
    />
  ) : (
    <Outlet />
  );
};
