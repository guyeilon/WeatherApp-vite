import Logo from 'components/Logo/Logo';
import React from 'react';
import styled from 'styled-components';
import LoginForm from 'screens/Auth/Login/LoginForm';
import SocialLogin from 'screens/Auth/Login/SocialLogin';
import SocialLoginProvider from 'screens/Auth/Login/SocialLoginProvider';
import Toast from 'common/Toast/Toast';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => (
  <SocialLoginProvider>
    <ContentWrapper>
      <StyledLogo />
      <LoginWrapper>
        <Title>Log in</Title>
        <Toast />
        <LoginForm />
        <Divider>Or log in with</Divider>
        <SocialLogin />
      </LoginWrapper>
    </ContentWrapper>
  </SocialLoginProvider>
);

export default Login;

const StyledLogo = styled(Logo).attrs({ className: 'app-Logo' })`
  position: absolute;
  width: 150px;
  height: 120px;
  left: 42px;
  top: -17px;

  @media only screen and (${({ theme }) => theme.breakpoints.max.mobile}) {
    top: 56px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ContentWrapper = styled.div.attrs({ className: 'app-login-content-wrapper' })`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;

  @media only screen and (${({ theme }) => theme.breakpoints.max.mobile}) {
    align-items: flex-end;
  }
`;

export const LoginWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.palette.white};

  border-radius: 30px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.16);
  display: grid;
  justify-content: center;
  justify-items: center;

  & > * {
    grid-column: 2;
  }

  width: 508px;
  grid-template-columns: 77px fit-content(100%) 77px;
  grid-template-rows: repeat(3, fit-content(100%));

  padding: 40px 46px;

  @media only screen and (${({ theme }) => theme.breakpoints.max.mobile}) {
    padding: 54px 30px;
    width: 100%;
    max-height: 80%;
    min-height: 712px;
    border-radius: 30px 30px 0 0;
  }

  .app-toast {
    width: 354px;
    margin-bottom: 32px;
  }
`;

const Title = styled.div.attrs({ className: 'app-title' })`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.sizes.h1};
  font-weight: ${({ theme }) => theme.typography.weights.extraBold};
  height: fit-content;
  margin-bottom: 8px;
  @media only screen and (${({ theme }) => theme.breakpoints.max.mobile}) {
    font-size: ${({ theme }) => theme.typography.sizes.h2};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }
`;

const Divider = styled.div.attrs({ className: 'app-divider' })`
  font-size: ${({ theme }) => theme.typography.sizes.p2};
  color: ${({ theme }) => theme.colors.palette.darkGray};
  line-height: 125%;
  margin: auto 0;
  display: flex;
  align-items: center;
  column-gap: 16px;
  ::before,
  ::after {
    content: '';
    width: 142px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.palette.darkWhite};
  }
  white-space: nowrap;
  margin: 32px 0;
`;
