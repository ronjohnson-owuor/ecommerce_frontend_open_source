import React, { useEffect, useRef, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Apirequest from '../modules/apirequest';

function Report() {
  const issue = useRef('');
  const [message,setMessage] = useState('');
  const request = new Apirequest();
  
  useEffect(()=>{
    console.log(message);
  },[message]);
  
  
  /* just use the order request for the problem report 
  too because the formart is the 
  same and there is no need to create a new one */
  const handlereport = (e) =>{
    e.preventDefault();
    request.order_request({problem:issue.current.value},setMessage,"report");
  }
  
  return (
	<div className='bg-background w-full min-h-screen font-NotoSansNabataean' >
    <Breadcrumb pagename="report"/>
    <Link to='/' className=' mx-4 text-sm bg-primary p-2 shadow-md'>back home</Link>
    <form className='w-[95%] h-[550px] mx-2 sm:mx-10 flex flex-col items-center justify-center ' >
      <h1 className='font-bold text-color my-4 text-xl'>Whats your issue🤷🏿</h1>
      <p className='text-sm text-color my-2'>You can report a bug, issue,poor service etc...</p>
      <textarea className='w-full  sm:w-[400px] text-sm h-[150px] bg-transparent border outline-none focus:bg-white focus:border-none' ref={issue} placeholder='write your problem here '></textarea>
		<button className='w-full h-[40px] sm:w-[400px] border border-color hover:text-white text-color rounded mt-4' onClick={handlereport} >submit</button>
      <p className='my-4 text-primary2 text-sm'>we stand to be corrected: <a className='animate-bounce' href="/"> 👉🏿back home</a></p>
    </form>
    <Footer/>
  </div>
  )
}

export default Report