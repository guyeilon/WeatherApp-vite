import { combineReducers } from '@reduxjs/toolkit';
import preferenceSlice from 'store/reducers/userPreferences.reducer';
import toast from 'store/reducers/toast.reducer';
import auth from 'store/reducers/auth.reducer';

const rootReducer = combineReducers({ preferenceSlice, toast, auth });
type RootState = ReturnType<typeof rootReducer>;

export type { RootState };
export default rootReducer;
