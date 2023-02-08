import { createContext, useContext, useRef, useState} from 'react';
import { themeContext } from '../App';
import WarningModal from './Modal';

export const modalContext = createContext(null);


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
    var [count, setCount] = useState(0)
    

  const [showModal, setShowModal] = useState(false);


    function getInputData(){
       const task = data.current.value;
       data.current.value = '';
       setCount(count + 1);
       crudOperations(task);
    }

    
    function crudOperations(task){
      var dataSet = fetchData();
      console.log("dataset", dataSet);

      if(dataSet != null){
        console.log("fetched");
      }
      else {
        dataSet = [];
      }
       dataSet.push(task);
       localStorage.setItem('dataSet', JSON.stringify(dataSet));
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
            `w-fit rounded leading-loose p-1 
            ${theme === 'light' 
            ? 'bg-zinc-400' 
            : 'bg-cyan-900 text-gray-100'}
        `}>
            <input 
            ref={data}
            type='text'
            placeholder='Add task here' 
            className={`bg-transparent p-1 rounded shadow-sm placeholder-slate-100 mr-1`}
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
            onClick={() => setShowModal(true)}>

              <img
              src={`${theme === 'light'
               ? 'lightdelete.svg'
                : 'darkdelete.svg'}`}

                alt={`${theme === 'light'
                ? 'Black delete button for light mode'
                : 'White delete button for dark mode'
              }`}

              className='inline-block relative bottom-1 ml-1'

              width={28}
              height={28}

              />
            </button>

               
              {showModal && (
                <WarningModal setShowModal={setShowModal}/>
              )}
        </div>
          
      <TodoElements props={count} />
    </div>
  )}



function TodoElements({props}){
  const count = props;
  const theme = useContext(themeContext);
  const dataSet = fetchData();
  const checkbox = useRef();
  const [status, setStatus] = useState(false);
  const[taskStatus, setTaskStatus] = useState();
  console.log("wow", count);

  // function checkStatus(){
  //   setStatus(!status);

  //   checkbox.current.checked = status;

  // }

  function deleteTask(id){
    console.log('pre', dataSet);
    if(dataSet.length < 2) {
      localStorage.clear('dataSet')
    }

    else {
    dataSet.splice(id, 1);
    localStorage.setItem('dataSet', JSON.stringify(dataSet)); }
  
  setTaskStatus(!taskStatus);
  }

  

  return(
    <div className={
      `w-full h-80 mt-4 rounded
      ${theme === 'light' 
      ?'bg-stone-600' 
      :'bg-sky-800'
      }`}>

    {(
      dataSet.map((task, index) => (
      <div 
      key={index}
      className={`flex justify-between p-1 h-auto
      ${status ? 'bg-green-700 text-white' : ''}
      `}
      >
        <div
        className='overflow-'
        >
        <input 
        ref={checkbox}
        className={`${status ? 'accent-slate-900': 'accent-current'}`}
        type="checkbox"
        onClick={() => setStatus(!status)}
        />
        <span 
        className='p-1'>
          {task} </span> 
          
          <div
          className={`text-white pl-1 text-xs 
          ${status === true ? 'inline-block' : 'hidden invisible'}}
          `}
          >

            {/* <button>
              <img 
              src='tick.svg'
              alt='red tick to confirm delete'
              width={18}
              height={18}
              />

            <img 
              src='cross.svg'
              alt='red tick to confirm delete'
              width={18}
              height={18}
              />
            </button> */}


  

          </div>
          <span className='hidden'>
          {`No of tasks : ${count}`} </span>
         </div>
  
        <button
        onClick={() => deleteTask(index)}
        >
          <img 
          src='darkdelete.svg'
          alt="White delete button"
          width={24}
          height={24}
          />
        </button>

        {taskStatus && (
         <div className='hidden'>
             The task has been deleted
          </div>
      )}

      </div>
    ))
    

 )} 
</div>
  )
}




// Next :
// Manage the checked  with two function to two svg img added which to add to completed section
// Refactor the Code
// Make the Task UI more beautiful