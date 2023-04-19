import Button from 'common/Button/Button';
import { Facebook, Google } from 'icons';
import React from 'react';
import styled from 'styled-components';
import { useGoogleLogin } from '@react-oauth/google';
import useLogin from 'screens/Auth/Login/hooks/useLogin';
import { FacebookLoginClient } from '@greatsumini/react-facebook-login';

interface SocialLoginProps {}

const SocialLogin: React.FC<SocialLoginProps> = () => {
  const { loginWithGoogle, loginWithFacebook } = useLogin();

  const googleLogin = useGoogleLogin({
    onSuccess: res => {
      const tokenResponse = res.access_token;
      loginWithGoogle({ access_token: tokenResponse });
    },
  });

  const facebookLogin = () => {
    FacebookLoginClient.login(
      res => {
        const tokenResponse = res?.authResponse?.accessToken !== undefined ? res?.authResponse?.accessToken : '';
        loginWithFacebook({ access_token: tokenResponse });
      },
      {
        scope: 'email',
      }
    );
  };

  return (
    <SocialLoginContainer>
      <Button
        onClick={() => facebookLogin()}
        variant="text"
        size="lg"
        color="secondary"
        icon={<Facebook width="24" height="24" />}
      >
        Log in with Facebook
      </Button>
      <Button
        variant="text"
        size="lg"
        color="secondary"
        icon={<Google width="24" height="24" />}
        onClick={() => googleLogin()}
      >
        Log in with Google
      </Button>
    </SocialLoginContainer>
  );
};

export default SocialLogin;

const SocialLoginContainer = styled.div.attrs({ className: 'app-social-login-container' })`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 4px;
  @media only screen and (${({ theme }) => theme.breakpoints.max.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 47px;
  }
`;
