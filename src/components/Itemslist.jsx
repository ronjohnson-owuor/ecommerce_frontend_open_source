import React,{useEffect, useState} from 'react'
import useCart from "../modules/useCart";
import usePagination from '../modules/usePagination';
import Buttonpagination from './Buttonpagination';

function Itemslist({item}) {
	const {add} = useCart();
	const {page,posts,change} = usePagination(item);
		
	
  return (
	<div className='w-full'>
		<div className='sm:mx-4 sm:w-[95%] min-h-[20px]  my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-20' >
		{
		posts.map((items)=>(
			<div key={items.id} className=' mx-4 hover:shadow-md w-[250px] sm:w-[300px] my-2 h-[350px]  sm:m-4 sm:mx-4'>
			<img className='max-w-[300px] min-w-[250px] w-full h-[200px] object-cover' src={items.image_link} alt="" />
			<div className='w-full text-color mx-2'>
			<p className='text-sm  mt-2'>{items.name}</p>
			<p>ksh.{items.price}</p>
			<button className='text-sm border border-color rounded my-4 hover:text-white w-[100px] h-[40px]  hover:bg-primary hover:border-none' onClick={()=>add(items)} >add to cart</button>
			</div>
			</div>				
		))
		}			
		</div>
		   {page && (
			<Buttonpagination item={item} change={change}  pages={page}/>
		   )}

	</div>
  )
}

export default Itemslist