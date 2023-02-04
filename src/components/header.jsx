import { useContext } from 'react';
import { themeContext } from '../App';

export default function Header({ name, toggleTheme }) {
  const theme = useContext(themeContext);

  return (
    <header
      className={ `flex justify-between shadow mb-5 p-1
        ${theme === 'light'
          ? 'bg-gray-300'
          : 'bg-gray-900'
  }`}
    >
      <div>
        <button>
          {theme === 'light' ? (
            <img
              src={'lightsettings.svg'}
              alt='Black setting icon for light mode'
              width={24}
              height={24}
            />
          ) : (
            <img
              src={'Darksettings.svg'}
              alt='White setting icon for dark mode'
              width={24}
              height={24}
            />
          )}
        </button>
      </div>

      <div
        className={
          theme === 'light'
            ? 'text-black text-center font-bold'
            : 'text-white text-center font-bold'
        }
      >
        {name}
      </div>

      <div>
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <img
              src={'lightmoon.svg'}
              alt='Black moon icon for light mode'
              width={24}
              height={24}
            />
          ) : (
            <img 
            src={'darkmoon.svg'} 
            alt='White icon for dark mode' 
            width={24}
            height={24} />
          )}
        </button>
      </div>
    </header>
  );
}
