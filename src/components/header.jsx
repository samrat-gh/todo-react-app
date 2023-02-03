import { useContext } from 'react';
import { themeContext } from '../App';

export default function Header({ name, toggleTheme }) {
  const theme = useContext(themeContext);

  return (
    <header
      className={
        theme === 'light'
          ? 'flex justify-between bg-gray-900 p-1'
          : 'flex justify-between bg-gray-300 p-1'
      }
    >
      <div>
        <button>
          {theme === 'light' ? (
            <img
              src={'darksettings.svg'}
              alt='White setting icon'
              width={24}
              height={24}
            />
          ) : (
            <img
              src={'lightsettings.svg'}
              alt='Dark setting icon'
              width={24}
              height={24}
            />
          )}
        </button>
      </div>

      <div
        className={
          theme === 'light'
            ? 'text-white text-center font-bold'
            : 'text-black text-center font-bold'
        }
      >
        {name}
      </div>

      <div>
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <img
              src={'lightmoon.svg'}
              alt='Light icon'
              width={24}
              height={24}
            />
          ) : (
            <img src={'darkmoon.svg'} alt='Dark icon' width={24} height={24} />
          )}
        </button>
      </div>
    </header>
  );
}
