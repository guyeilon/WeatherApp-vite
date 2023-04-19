import React, { useCallback, useEffect } from 'react';
import environment from 'constants/config';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { FacebookLoginClient } from '@greatsumini/react-facebook-login';

const SocialLoginProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const loadFB = useCallback(async () => {
    FacebookLoginClient.clear();
    await FacebookLoginClient.loadSdk('en_US');
    FacebookLoginClient.init({ appId: environment.facebookAppId, version: 'v9.0' });
  }, []);

  useEffect(() => {
    loadFB();
  }, [loadFB]);

  return <GoogleOAuthProvider clientId={environment.googleAuthClientId}>{children}</GoogleOAuthProvider>;
};

export default SocialLoginProvider;
