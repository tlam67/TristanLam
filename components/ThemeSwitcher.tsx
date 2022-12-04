import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme !== 'dark' && theme !== 'light') setTheme('dark');
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeIcon = () => {
    if (theme === 'light') {
      return <FontAwesomeIcon icon={faMoon} id="themeSwitch"/>;
    }
    return <FontAwesomeIcon icon={faSun} id="themeSwitch"/>
  }

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="w-9 h-9 rounded-lg bg-amber-200 dark:bg-blue-black hover:animate-pulse" aria-label="toggle theme">
      {renderThemeIcon()}
    </button>
  )

}

export default ThemeSwitcher;