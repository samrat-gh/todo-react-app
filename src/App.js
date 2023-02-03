import './App.css';
import './index.css'
import { useContext } from 'react';
import Header, {themeContext} from './components/header'
import Todo from './components/todo'

function App() {
  const theme  = useContext(themeContext);
  console.log(theme);
  return (
    <main className={(theme === 'light') ? "h-screen bg-blue-800" : "h-screen bg-red-900"} >
      <Header name='Todo with react' />
    <Todo />

    </main>
  );
}

export default App;
