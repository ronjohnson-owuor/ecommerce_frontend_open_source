import React, { useEffect, useState } from 'react'
import Apirequest from '../modules/apirequest';

function Signin() {
	const api_request = new Apirequest();
	const [message,setMessage] = useState(null);
	const [signin_data,setsignin_data] = useState({
		fullname:'',
		email:'',
		password:'',
		phone_number:'',
		location:''
	});
	
	
	useEffect(()=>{
		console.log(message);
	},[message]);
	
	
	/* this is the start of input validation */
	
	function validatesignin_data(signindata){
		const flag = true;
		// username validation
		let username_correct = true;
		for(const char of signindata['fullname']){
			if(char == ' '){
				username_correct = false;
				flag =false;
			}
		}
		if (!username_correct || signindata['fullname'].length == 0 ){
			alert("USERNAME ERROR:No spaces in the name use _ (underscore) instead");
		}
		
		
		// phone number  and location
		function isPhoneNumberValid(phoneNumber) {
			const allowed = ['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
			for (const char of phoneNumber) {
			  if (!allowed.includes(char)) {
				return false;
			  }
			}
			return true;
		  }
		if (!isPhoneNumberValid(signindata['phone_number']) || signindata['phone_number'].length == 0) {
			alert("PHONE ERROR: please enter a valid phone number!")
			flag = false;
		}
		
		if(!signindata['location'].includes(",")){
			flag = false;
			alert("LOCATION ERROR:please follow the formart eg: Ruaka,kiambu")
		}
		
		// send to the server
		if (flag){
			api_request.login_and_signup(signin_data,setMessage,false,true);	
		}

	}
	/* End of input validation  */
	
	
	
	
	
  return (
	<div className='w-full font-NotoSansNabataean px-4 '>
		<input  className='w-[90%] h-[40px] bg-transparent border text-color text-sm my-2 outline-none rounded focus:border-primary' onChange={(e)=>setsignin_data((prev)=>({
			...prev,
			fullname: e.target.value
		}))} type="text" placeholder='enter your full name' />
		<input  className='w-[90%] h-[40px] bg-transparent border text-color text-sm my-2 outline-none rounded focus:border-primary' onChange={(e)=>setsignin_data((prev)=>({
			...prev,
			email: e.target.value
		}))} type="email" placeholder='your email' />
		<input  className='w-[90%] h-[40px] bg-transparent border text-color text-sm my-2 outline-none rounded focus:border-primary' onChange={(e)=>setsignin_data((prev)=>({
			...prev,
			password: e.target.value
		}))} type="password" placeholder='enter your password' />
		
		<input  className='w-[90%] h-[40px] bg-transparent border text-color text-sm my-2 outline-none rounded focus:border-primary' onChange={(e) =>
    setsignin_data((prev) => ({
      ...prev,
      location: e.target.value
    }))
  } type="text" placeholder='enter location eg Ruaka,kiambu' />
  		<input  className='w-[90%] h-[40px] bg-transparent border text-color text-sm my-2 outline-none rounded focus:border-primary' onChange={(e) =>
    setsignin_data((prev) => ({
      ...prev,
      phone_number: e.target.value
    }))
  } type="text" placeholder='enter phone number' />
		<button className='w-[90%] h-[40px] bg-primary border-none rounded mt-4 cursor-pointer mb-2 hover:text-white' onClick={()=>validatesignin_data(signin_data)}>sign in</button>
	</div>
  )
}

export default Signin