import React, { useState } from 'react'
import Addproduct from './Addproduct';
import Editproduct from './Editproduct';
import Vieworder from './Vieworder';
import { ToastContainer } from 'react-toastify';

function Adminaction() {
	const [view_changer,setView_chanager] = useState("select something");
  return (
	<div className='bg-background min-h-screen m-0 font-NotoSansNabataean'>
		<ToastContainer theme='dark'/>
		<div className='sticky shadow-md h-[40px] sm:w-[400px] flex  items-center font-NotoSansNabataean rounded  shadow-white top-0'>
		<a className=' mx-2 text-sm underline text-white bg-overlay  decoration-none hover:text-primary' href="/">back home</a>
			<select onChange={(e)=>setView_chanager(e.target.value)} className='bg-background outline-none border border-color text-color w-[150px]'>
			<option value={null}>select something</option>
				<option value="add_product">Add a product</option>
				<option value="view_orders">View orders</option>
				<option value="edit_product">Edit product</option>
			</select>
		</div>
		
		{/* display according to the selected option */}
		<div className='mt-10 w-full  text-color px-4 min-h-screen overflow-x-scroll md:overflow-x-hidden'>
				<span className='text-xl font-bold'>{view_changer}</span>
				
				{
					view_changer == 'add_product' && (
						<Addproduct/>
					)
				}
				
				{
					view_changer == 'edit_product' && (
						<Editproduct/>
					)
				}
				{
					view_changer == 'view_orders' && (
						<Vieworder/>
					)
				}
				
		</div>
	</div>
  )
}

export default Adminaction