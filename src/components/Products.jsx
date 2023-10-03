import wallpaper from '../assets/wallpaper.jpg'
import React, { useEffect, useState } from 'react'
import useFilterproducts from '../modules/useFilterproducts';
import Itemslist from './Itemslist';
import Basic from '../modules/basic';
import Loader from '../common/Loader';


function Products() {
	var {sorted,keyword,setfilter,filter} = useFilterproducts();
	const basic = new Basic();
	const [perpage,setPerpage] = useState(2);
	const [infinite_product,setinfinite_product] = useState([]);
		
	// initialize the infinite_scrolling product page
	useEffect(()=>{
		setinfinite_product(sorted ? sorted.slice(0,perpage):[]);
	},[sorted]);
	
	
	// slice everytime the page changes
	useEffect(()=>{
		setinfinite_product(sorted.slice(0,perpage));
	},[perpage]);
	
	
	/*this function handles the infinite srolling by adding one more product
	on the list when the user reaches the end of the page 
	we are using the basic module to check if the user has reached the bottom
	*/
	const handle_infinite_scroll =()=>{
		if(basic.reachedBottom()){		
			setPerpage(prev =>(prev+1));
			scrollTo = scroll_height-20;
		}	
	}
	
	
	useEffect(()=>{
		window.addEventListener("scroll",handle_infinite_scroll);
		return ()=>window.removeEventListener("scroll",handle_infinite_scroll);
	},[]);
	
	
  return (
	<>
	{sorted.length == 0 ? 
	<Loader name="products" time={100000}/>
	:
	<div className='w-full min-h-screen my-10 font-NotoSansNabataean'>
		<div>
		<select className='w-[250px] shadow-md  font-NotoSansNabataean bg-background text-color text-md p-2 rounded-sm mx-4' onChange={(e)=>{
			if(e.target.value == ''){
				window.location.reload();
			}else{
				setfilter(e.target.value);
			}
			
			}} id="filter">
				<option className='hover:text-white hover:bg-primary font-bold' value="">filter product</option>
				<option className='hover:text-white hover:bg-primary font-bold' value="">all products</option>
				{
					keyword?.map((keywords)=>(
						<option key={keyword.id} className='hover:text-white hover:bg-primary font-bold' value={keywords}>{keywords}</option>
					))
				}

			</select>
		</div>
		<div className=' mx-0 sm:mx-4 full sm:w-[90%] min-h-[20px]  my-4 '>
		{
		infinite_product.map(category =>(
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
	</div>}
	</>
  )
}

export default Products