import { useSelector, useDispatch } from 'react-redux';
import { type RootState } from '../redux';
import { setLanguage, setTheme, toggleTheme } from '../redux/slices/appPreferencesSlice';

export const useAppPreferences = () => {
  const dispatch = useDispatch();
  const { currentLanguage, theme } = useSelector((state: RootState) => state.appPreferences);

  return {
    currentLanguage,
    theme,
    setLanguage: (language: string) => dispatch(setLanguage(language)),
    setTheme: (theme: 'light' | 'dark') => dispatch(setTheme(theme)),
    toggleTheme: () => dispatch(toggleTheme())
  };
};