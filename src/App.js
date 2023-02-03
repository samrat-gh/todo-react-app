import './App.css';
import { createContext, useState } from 'react';
import Header from './components/header';
import Todo from './components/todo';

export const themeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  console.log(theme);

  return (
    <themeContext.Provider value={theme}>
      <main
        className={
          theme === 'light' ? 'h-screen bg-blue-800' : 'h-screen bg-red-900'
        }
      >
        <Header
          name='Todo with react'
          toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <Todo />
      </main>
    </themeContext.Provider>
  );
}

export default App;
