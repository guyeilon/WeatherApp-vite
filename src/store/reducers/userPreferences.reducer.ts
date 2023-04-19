import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface UserPreferencesState {
  theme: 'light' | 'dark';
  degree: 'fahrenheit' | 'celsius';
}

const initialState: UserPreferencesState = { theme: 'light', degree: 'celsius' };

const userPreference = createSlice({
  name: 'userPreference',
  initialState,
  reducers: {
    toggleTheme: state => ({ ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }),
    toggleDegree: state => ({ ...state, degree: state.degree === 'celsius' ? 'fahrenheit' : 'celsius' }),
  },
});

const persistConfig = {
  key: 'userPreference',
  storage,
};

export default persistReducer(persistConfig, userPreference.reducer);
export const { toggleTheme, toggleDegree } = userPreference.actions;
