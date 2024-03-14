import React, { useEffect, useRef, useState } from 'react'
import Apirequest from '../modules/apirequest'
import { ToastContainer, toast } from 'react-toastify';
import Navigation from "./Navigation";

function Customorder() {
	const request = new Apirequest();
	const [message,setMessage] = useState(null);
	const order = useRef('');
	
	
	useEffect(()=>{
		if(message){
		toast.success(message);	
		}
		
	},[message]);
	
	const handleCustomorder = () =>{
		if(order.current.value !== ''){
			request.order_request({order:order.current.value},setMessage,'customorder');	
		}
	};
	
	
  return (
	<div className='w-full text-color font-NotoSansNabataean font-bold min-h-screen font-NotoSansNabataean'>
		<Navigation/>
		<ToastContainer theme='dark'/>
		<div className='w-[90%] mx-4 h-full flex flex-col items-center justify-center mt-10'>
			<h1 className='my-2 text-xl text-primary mb-4'>custom order</h1>
				<textarea ref={order} className='w-full sm:w-[400px] rounded-sm text-sm h-[150px] bg-transparent border focus:border-white border-color  focus:border-none' placeholder='please enter your order here...' id="custom_order"></textarea>
				<button
				className='w-full sm:w-[400px]  h-[40px] hover:text-white bg-primary2 text-white hover:bg-primary rounded mt-4' onClick={handleCustomorder} >place order</button>		
		</div>
	</div>
  )
}

export default Customorder