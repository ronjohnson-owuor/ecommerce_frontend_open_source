import React, { useState } from 'react'
import Signin from './Signin';
import Login from './Login';
import { ToastContainer } from 'react-toastify';

function Accounts() {
	const [type,setType] = useState(false);
  return (
	<div className='w-full min-h-screen overflow-clip bg-background text-color'>
		<ToastContainer theme='dark'/>
	<div className='w-full sm:w-[400px] min-h-[100px] p-4 border  rounded-md absolute top-20 sm:left-[30%] z-10 '>
		<button onClick={()=>setType(!type)} className='w-[100px] text-sm mb-10 border hover:text-primary rounded-md h-[40px]'>{type ? 'Log in': 'Sign in'}</button>
		<a className='my-10 mx-4' href="/">back home</a>
		{
			type ? <Signin/> : <Login/>
		}
	</div>
	</div>
  )
}

export default Accounts