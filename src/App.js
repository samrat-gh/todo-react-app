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
        className={`h-screen
          ${theme === 'dark' ? 'bg-teal-600' : 'bg-zinc-200'
  }`}
      >
        <Header
          name='Todo with react'
          toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <Todo />
      
    <GitLink />

      </main>
    </themeContext.Provider>
  );
}

export default App;


function GitLink(){

return(
  <button
  className='fixed bottom-0'
  >
  <a href='https://github.com/samrat-gh/todo-react-app' rel='noreferrer' target='_blank'> 
  <img 
  src='github.svg'
  alt='github logo'

  width={32}
  height={32}
  />

</a>       
</button>
)
}