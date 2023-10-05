import React, { useState } from 'react'
import Signin from './Signin';
import Login from './Login';
import Breadcrumb from './Breadcrumb';
import { ToastContainer } from 'react-toastify';

function Accounts() {
	const [type,setType] = useState(false);
  return (
	<div className='w-full min-h-screen overflow-clip bg-background text-color'>
		<ToastContainer theme='dark'/>
	<div className='w-full sm:w-[400px] min-h-[100px] shadow-2xl rounded-md absolute top-0 sm:left-[30%] z-10 bg-overlay'>
		<button onClick={()=>setType(!type)} className='w-[100px] text-sm mb-10 border hover:text-white h-[40px]'>{type ? 'Log in': 'Sign in'}</button>
		{
			type ? <Signin/> : <Login/>
		}
		<Breadcrumb pagename="accounts"/>
	</div>
	</div>
  )
}

export default Accounts