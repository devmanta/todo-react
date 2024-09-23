import { useContext } from 'react';
import { ThemeContext } from '../context/DarkModeContext';

export const useDarkMode = () => useContext(ThemeContext);
