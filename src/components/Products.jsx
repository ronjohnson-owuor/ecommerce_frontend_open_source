import wallpaper from '../assets/wallpaper.jpg'
import React, { useEffect } from 'react'
import useFilterproducts from '../modules/useFilterproducts';
import Itemslist from './Itemslist';
import Basic from '../modules/basic';


function Products() {
	const {sorted,keyword,setfilter,filter} = useFilterproducts();
	const basic = new Basic();
	
	
  return (
	<div className='w-full min-h-screen my-10 font-NotoSansNabataean'>
		<div>
		<select className='w-[250px] shadow-md  font-NotoSansNabataean bg-background text-color text-md p-2 rounded-sm mx-4' onChange={(e)=>setfilter(e.target.value)} id="filter">
				<option className='hover:text-white hover:bg-primary font-bold' value="">filter product</option>
				<option className='hover:text-white hover:bg-primary font-bold' value="">all products</option>
				{
					keyword?.map((keywords)=>(
						<option className='hover:text-white hover:bg-primary font-bold' value={keywords}>{keywords}</option>
					))
				}

			</select>
		</div>
		<div className=' mx-0 sm:mx-4 full sm:w-[90%] min-h-[20px]  my-4 '>
		{
		sorted.map(category =>(
				<>
				<div key={category.key} className='my-10'>
					<h3 className='text-white font-bold mx-4 text-2xl'>{category.keyword}</h3>
				</div>
				
				{
					filter !== '' && (
						<Itemslist item={category.products}/>
					)
				}
				{
					filter == '' && (
						category.products.map(item =>(
							<Itemslist item={item}/>
					)))
				}
		</>
		))
		}
		</div>
	</div>
  )
}

export default Products