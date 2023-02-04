import { useContext, useState } from 'react';
import { themeContext } from '../App';

export default function Todo() {
  // const [task, setTask] = useState({
  //   task1:  '',
  //   description: '',
  //   time: '',});

  

  const [visibility, setVisibility] = useState(false);

  const theme = useContext(themeContext);
  return (
    <div
      className={ `w-fit h-auto rounded-md p-3 m-auto
        ${theme === 'light'
          ? 'bg-neutral-500 text-white'
          : 'bg-zinc-500'
      }`}
    >

      <div 
        className={
            `w-fit pt-1 rounded
            ${theme === 'light' 
            ? 'bg-zinc-400' 
            : 'bg-cyan-900 text-gray-100'}
        `}>
            <input 
            type='text'
            placeholder='Add task here' 
            className={`bg-transparent p-1 rounded shadow-sm placeholder-slate-100`}
            onClick={() => setVisibility(!visibility) }

            {...visibility && (
              <p>ABCDEFGH </p>
                  //  <input 
                  //  type="text"
                  //  placeholder="write about your task here"
                  //  />
            )}

            />
            <button
            className={`
            
            `}
            >
              <img 
              src={`${theme === 'light' 
              ? 'lightadd.svg' 
              : 'darkadd.svg'}`}

              alt={`${theme === 'light' 
              ? 'Black Button for light mode' 
              : 'White Button for dark mode'}`} 
              
              width={35}
              height={35}

              className='inline-block relative bottom-1'

              />


            </button>
        </div>

      <TodoElements />
    </div>
  );
}


function TodoElements(){
  const theme = useContext(themeContext);

  
  return(
    <div className={
      `w-full h-80 mt-4 rounded
      ${theme === 'light' 
      ? 'bg-stone-600' 
      : 'bg-sky-800'}` 
    }>

      <div>
        <input type='checkbox' />
          Learn React
          <button> ... </button>
      </div>
           
    </div>
  )
}

