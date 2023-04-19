import { RootState } from 'store/reducers';

const auth = (state: RootState) => state.auth;
const accessToken = (state: RootState) => state.auth.accessToken;
const refreshToken = (state: RootState) => state.auth.refreshToken;

const AuthSelector = { auth, accessToken, refreshToken };
export default AuthSelector;
