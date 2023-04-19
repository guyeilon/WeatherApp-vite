import { useAppDispatch, useAppSelector } from 'store/hooks';
import UserPreferencesSelector from 'store/selectors/userPreferences.selectors';
import * as Action from 'store/reducers/userPreferences.reducer';

type UserPreferenceReturn = {
  themeMode: 'light' | 'dark';
  degreeMode: 'fahrenheit' | 'celsius';
  toggleTheme: VoidFunction;
  toggleDegree: VoidFunction;
  isFahrenheit: boolean;
  isDarkMode: boolean;
};

const useUserPreference = (): UserPreferenceReturn => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(UserPreferencesSelector.theme);
  const degreeMode = useAppSelector(UserPreferencesSelector.degree);

  const toggleTheme = () => dispatch(Action.toggleTheme());
  const toggleDegree = () => dispatch(Action.toggleDegree());

  const isFahrenheit = degreeMode === 'fahrenheit';
  const isDarkMode = themeMode === 'dark';

  return { themeMode, degreeMode, toggleTheme, toggleDegree, isFahrenheit, isDarkMode };
};

export default useUserPreference;
