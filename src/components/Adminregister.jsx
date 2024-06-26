import React, { useRef } from 'react'
import {ToastContainer, toast} from 'react-toastify';

function Adminregister({setAllowed}) {
	const admin_key = import.meta.env.VITE_ADMIN_KEY;
	const user_input = useRef();
	const checkAvailabily = () =>{
		if(admin_key === user_input.current.value){
			setAllowed(true);	
		}else{
			toast.error("incorrect pass key...consult ADMIN or DEVELOPER");
		}
	}
	
  return (
	<div className='w-full sm:w-[400px] sm:mx-[30%]  h-[200px] shadow-xl rounded-md text-center'>
		<ToastContainer theme='dark'/>
		<div className='w-full h-full font-NotoSansNabataean text-color flex flex-col'>
			<h1 className='mt-4 font-bold mx-2 text-primary'>ADMIN LOGIN PANEL</h1>
			<input type="text" ref={user_input} className='my-4 p-2 mx-[10%] w-[80%] h-[40px] bg-transparent text-color border border-color rounded-md' placeholder='enter key ' />
			<button onClick={checkAvailabily} className='my-4 mx-[10%] w-4/5 h-[40px] bg-primary2 hover:text-white rounded-md'>submit</button>
		</div>
	</div>
  )
}

export default Adminregister