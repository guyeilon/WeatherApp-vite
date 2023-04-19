import { RootState } from 'store/reducers';

const userPreferencesSelector = (state: RootState) => state.preferenceSlice;

const theme = (state: RootState) => userPreferencesSelector(state).theme;
const degree = (state: RootState) => userPreferencesSelector(state).degree;

const UserPreferencesSelector = { userPreferencesSelector, theme, degree };
export default UserPreferencesSelector;
