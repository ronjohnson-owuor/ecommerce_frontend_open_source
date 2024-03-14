import React, {useEffect, useState} from 'react'
import Apirequest from '../modules/apirequest';
import { ToastContainer, toast } from 'react-toastify';


function Login() {
	const api_request = new Apirequest();
	const [login_details, setlogin_details] = useState({
		email:'',
		password:''
	});
	const [message,setMessage] = useState('');
	
	function handle_login(){
		api_request.login_and_signup(login_details,setMessage,false,false);
	}
	
	useEffect(()=>{
		if(message){
			toast.success("Login status: ",message);
		}
		
	},[message]);
	
  return (
	<div>
		<ToastContainer/>
		<input onChange={(e)=>setlogin_details((prev)=>({
			...prev,
			email:e.target.value
		}))}  className='w-[90%] h-[40px] bg-transparent border text-color text-sm my-2 outline-none rounded focus:border-primary p-2' type="email" placeholder='your email' />
		<input  onChange={(e)=>setlogin_details((prev)=>({
			...prev,
			password:e.target.value
		}))} className='w-[90%] h-[40px] bg-transparent border text-color text-sm my-2 outline-none rounded focus:border-primary p-2' type="password" placeholder='enter your password' />
		<button onClick={handle_login} className='w-[90%] h-[40px] bg-primary border-none rounded mt-4 cursor-pointer mb-2 hover:text-white'>log in</button>
	</div>
  )
}

export default Login