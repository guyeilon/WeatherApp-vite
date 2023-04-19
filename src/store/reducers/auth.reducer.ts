import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Auth } from 'models/User';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState: Auth = { user: null, accessToken: null, refreshToken: null };

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUserSession: (state, action: PayloadAction<Auth>) => ({
      ...state,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
      user: action.payload.user,
    }),
    logout: () => initialState,
    refreshAccessToken: (state, action: PayloadAction<Pick<Auth, 'accessToken'>>) => ({
      ...state,
      accessToken: action.payload.accessToken,
    }),
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken'],
};

export default persistReducer(persistConfig, auth.reducer);
export const { logout, storeUserSession, refreshAccessToken } = auth.actions;
