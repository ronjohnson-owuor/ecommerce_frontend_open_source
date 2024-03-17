import React, { useState } from 'react'
import Addproduct from './Addproduct';
import Editproduct from './Editproduct';
import Vieworder from './Vieworder';
import { ToastContainer } from 'react-toastify';
import Navigation from "../components/Navigation";

function Adminaction() {
	const [view_changer,setView_chanager] = useState("select something");
  return (
	<div className='bg-background min-h-screen m-0 font-NotoSansNabataean'>
		<Navigation/>
		<ToastContainer theme='dark'/>
		<div className='w-full my-4 sticky h-[40px] flex  items-center justify-center font-NotoSansNabataean rounded  top-0'>
		<a className=' mx-2 text-sm rounded-md text-primary2 p-1 no-underline border  decoration-none hover:text-primary' href="/">back home</a>
			<select onChange={(e)=>setView_chanager(e.target.value)} className=' bg-background outline-none  text-color w-[150px]'>
			<option value={null}>click to choose action</option>
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