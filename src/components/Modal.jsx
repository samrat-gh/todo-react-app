// import { useContext } from "react";
// import { themeContext } from "../App";

export default function WarningModal({setShowModal}) {
    // const theme = useContext(themeContext);
    function status(value) {
    if(value)
    localStorage.clear('dataSet');


    console.log("test test gone")
    setShowModal(false)
    }

    return(
      <div 
      className="w-fit h-auto bg-gray-200 rounded p-3 shadow absolute top-auto left-auto text-xs">
        <h1 className="text-black">Are you sure, you want to delete all task?</h1>
        <div className=" flex justify-around ">
        <button  className="bg-slate-500 p-1 px-3 text-white rounded" onClick={() => status(true)}>Yes </button>
        <button className="bg-slate-500 p-1 px-3 text-white rounded" onClick={()=> status(false)}>No </button>
      </div> </div>
    )
  }


  // export function EditMenu(){

  //   return(
  //       <div>

  //       </div>
  //   )
  // }