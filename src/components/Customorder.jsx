import React, { useEffect, useRef, useState } from 'react'
import Apirequest from '../modules/apirequest'
import { ToastContainer, toast } from 'react-toastify';

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
	<div className='w-full sm:w-[300px] min-h-[200px] font-NotoSansNabataean mt-10 mb-10 sm:mb-4'>
		<ToastContainer theme='dark'/>
		<h1 className='my-2 animate-pulse'>Make a custom order here 👇</h1>
		<textarea ref={order} className='w-full sm:w-[400px] rounded-sm text-sm h-[150px] bg-transparent border focus:bg-white focus:border-none' placeholder='please specify the price and quantity you want' id="custom_order"></textarea>
		<button className='w-full sm:w-[400px]  h-[40px] border border-color hover:text-white text-color rounded mt-4' onClick={handleCustomorder} >place order</button>
	</div>
  )
}

export default Customorder