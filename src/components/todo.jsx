import { useContext, useRef, useState} from 'react';
import { themeContext } from '../App';

function fetchData() {
  var data = JSON.parse(localStorage.getItem('dataSet'));
  console.log("arrival", data);

  if(data != null) {
    return data;
  } 
  else {
    data = [];
    return data;
  }  
}


export default function Todo() {
    const theme = useContext(themeContext);
    const data =  useRef();
    const [availability, setAvailability] = useState(false);
    var [count, setCount] = useState(0)



    function getInputData(){
       const task = data.current.value;
       data.current.value = '';
       setAvailability(!availability);
       setCount(count + 1);
       console.log("counted ",count);
       crudOperations(task);
    }

    function crudOperations(task){
      var dataSet = fetchData();
      console.log("dataset", dataSet);

      if(dataSet != null){
        console.log("fetched");
        setAvailability(availability === true);
      }
      else {
        dataSet = [];
        setAvailability(availability === false);
      }
       dataSet.push(task);
       localStorage.setItem('dataSet', JSON.stringify(dataSet));
    }

    function clearData() {
      localStorage.clear();
      setAvailability(availability === false);
      setCount(count = 0);
    }




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
            ref={data}
            type='text'
            placeholder='Add task here' 
            className={`bg-transparent p-1 rounded shadow-sm placeholder-slate-100`}
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
               onClick={getInputData}

              />


            </button>
            <button
            onClick={clearData}>

            Clear Data 
            </button>
        </div>
          
      <TodoElements props={{availability, theme, count}} />
    </div>
  );
}

function TodoElements(props){
  const {availability, theme, count} = props;
  const dataSet = fetchData();
  const status = useRef(false);

  return(
    <div className={
      `w-full h-80 mt-4 rounded
      ${theme === 'light' 
      ? 'bg-stone-600' 
      : 'bg-sky-800'}` 
    }>

{!availability ? (
      dataSet.map((task, index) => (
      <div 
      key={index}
      className='flex justify-between p-1'
      >
        <div>
        <input ref={status} type="checkbox"/>
        <span 
        className='p-1'>
          {task} </span> 

          <span className='hidden'>
          {`No of tasks : ${count}`} </span>
         </div>
  
        <button>
          <img 
          src="darkdots.svg" 
          alt="White tripple dots"
          width={18}
          height={18}
          />
        </button>
      </div>
    ))
 
 ) : ( <div>Not available</div> )} 
</div>
  )
}