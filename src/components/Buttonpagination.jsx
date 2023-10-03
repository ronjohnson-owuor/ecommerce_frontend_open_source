import React, { useState } from 'react'
import usePagination from '../modules/usePagination';

function Buttonpagination({change,pages}) {
	const [current,setCurrent] = useState(1);
	
	const changePage = (page) =>{
		setCurrent(page);
		change(page);
	}
	
  return (
	<div key="pages_id" className='w-[90%] flex items-center justify-center  my-2'>
		{
			pages?.map((page)=>(
				<button key={page.id} className={` ${page == current && 'bg-primary text-white border-none'} w-[50px] h-[40px] border text-color mr-1 rounded-sm border-color`} onClick={()=>changePage(page)}>{page}</button>
			))
		}
	</div>
  )
}

export default Buttonpagination