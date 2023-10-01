import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import Basic from '../modules/basic'
import Dropdown from './Drop.jsx'
import useFilterproducts from '../modules/useFilterproducts'
import useCart from '../modules/useCart'

export default function Navigation() {
	const basic = new Basic();
	const [drop,setdrop] = useState(false);
	const[search,setSearch] = useState('');
	const [filtered,setFiltered] = useState([]);
	const {sorted} = useFilterproducts();
	const {add} = useCart();
	
	
	const filterProduct = () =>{
		const ready_product_after_filter = [];
		sorted.filter(items =>items.keyword.includes(search))
		.map(ready_product =>{
			ready_product.products.map(items=>{
				items.map(item_array=>{
					ready_product_after_filter.push(item_array);
				})
			})
		});
		setFiltered(ready_product_after_filter);
	}
	
	useEffect(() => {
			filterProduct();
	}, [search]);
	
	
  return (
	<div className='w-full h-[80px]  flex shadow font-NotoSansNabataean'>
		<div className='w-1/3 h-full flex items-center'>
			<h1 
			onClick={()=>basic.redirect('/')}
			className='text-primary2 font-extrabold mx-2 font-NotoSansNabataean text-xl sm:text-4xl cursor-pointer'>Lynne</h1>
		</div>
		<div className='w-[100px] sm:w-[400px] md:w-1/3 h-full relative flex items-center'>
			<input title='search bar' onChange={(e)=>setSearch(e.target.value)}  className='w-full rounded-sm hover:shadow-sm hover:shadow-primary bg-transparent h-[40px] shadow-xl pl-2 outline-none text-color' type="text" placeholder='search...' />
			<br />
				<div className={`w-[300px] absolute top-[100%] l-0 min-h-0 max-h-[400px] shadow-md z-10  bg-overlay ${filtered.length > 4 && 'overflow-y-scroll'}`}>
						{
							search !== '' &&
						filtered.map(item =>(
							<div className="w-[96%] flex my-4 shadow-md text-color text-sm">
								<div className='w-[80px] h-[80px] mr-2'>
									<img className='w-full h-full object-cover' src={item.image_link} alt="product link" />
									</div>
								<div className='pt-2'>
									<p >{item.name}</p>
									<br />
									<small>ksh.{item.price}</small>
									<br />
									<button className='w-[100px] h-[40px] border border-color text-white hover:bg-primary hover:border-none my-2 rounded-sm ' onClick={()=>add(item)}>add to cart</button>
								</div>
							</div>
						))
						}		
				</div>

		</div>
		<div className='w-1/3 h-full flex items-center text-color justify-end active:text-primary cursor-pointer relative font-extrabold hover:text-primary'>
			<FontAwesomeIcon icon={faUser}  onClick={()=>setdrop(!drop)}/>
			&nbsp;
			<span className='mr-4 ' onClick={()=>setdrop(!drop)} >account</span>
			{
				drop && (
				<Dropdown/>
				)
			}
		</div>
	</div>
  )
}
