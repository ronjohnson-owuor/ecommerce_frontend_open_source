import React, { useState } from 'react'
import '../custom_styling/loader.css'

function Loader({name,time}) {
	
	const [loading,setLoading] = useState(true);
	
	setTimeout(()=>{
		setLoading(false);
	},time);
	
 	
  return (
	<div className='w-full  sm:w-[200px] mt-[10%] relative  text-color h-[150px] rounded-md sm:ml-[30%]'>
		{
			loading ? 
			<>
			<div id='loader'></div>
			<div id='loader'></div>
			<div id='loader'></div>
			<div id='loader'></div>
			<div id='loader'></div>
			<div id='loader'></div>
	
			<p id='loader-text' className='font-bold text-md text-color absolute top-[40%] left-[20%] '>loading {name}</p>
			</>		
			:
			<>
			<p className='font-bold text-md text-color absolute top-[40%] left-[20%] '>an error occured</p>
			<button className=' absolute top-[60%] w-[130px] h-[40px] border border-color rounded hover:bg-primary hover:border-none hover:text-white left-[20%]' onClick={()=>window.location.reload()}>reload</button>
			</>
		}
		
	</div>
  )
}

export default Loader