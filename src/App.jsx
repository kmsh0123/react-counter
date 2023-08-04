import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './feature/CounterSlice';


const App = () => {
  const [show,setShow] = useState(true);
  const count = useSelector((state)=>state.value);
  const dispatch = useDispatch();

  useEffect(()=>{
  setTimeout(()=>{
  dispatch(decrement());
  },1000)
 })

 useEffect(()=>{
  setTimeout(()=>{
  setShow(false)
  },5000)
})

  return (
    <div className='block'>
    <button className={`flex justify-center mt-5 text-4xl ${show ? "bg-slate-500 btn-disabled" : "bg-slate-900 cursor-auto"} text-white py-5 w-96 mx-auto rounded-lg`}>
      <h1>{`Download For ${show ? "Waiting for " : "Now"} ${show ? count : " "}`}</h1>
    </button>
    {/* {
      show ? <div className="flex justify-center mt-5 text-4xl space-x-10">
      <button onClick={()=>dispatch(increment())}>+</button>
       <button onClick={()=>dispatch(decrement())}>-</button>
      </div> : ""
    } */}
    </div>
  )
}

export default App