import React from 'react';
import { Search, Sun, Moon, Bell } from 'lucide-react';
import { useTheme } from '../contexts/themeConctext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const { isDarkMode, setIsDarkMode } = useTheme();

  const switchLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <header className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg w-64 focus:outline-none dark:text-white"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-400"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="relative">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
          </div>
        </div>
        {/* <div className='relative gap-2 dark:text-gray-400 justify-between flex'>
          <button onClick={() => switchLanguage('en')}>EN</button>
          <button onClick={() => switchLanguage('fr')}>FR</button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
