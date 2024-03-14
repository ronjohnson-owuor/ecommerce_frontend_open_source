import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect } from 'react'
import Basic from '../modules/basic'
import Dropdown from './Drop.jsx'
import useFilterproducts from '../modules/useFilterproducts'
import Searchbox from './Searchbox'
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
	const basic = new Basic();
	const [drop,setdrop] = useState(false);
	const {sorted} = useFilterproducts();
	const [searchFocus,setsearchFocus] = useState(false);
	
	
	
  return (
	<div className='w-full h-[80px]  flex items-center justify-around shadow-sm font-roboto'>
		<div className='flex items-center h-full '>
			<h1
			title='home' 
			onClick={()=>basic.redirect('/')}
			className='text-primary2 font-bold font-NotoSansNabataean text-xl sm:text-4xl cursor-pointer overflow-hidden'>Lynne crochet</h1>
		</div>
		
		{/* search popup div */}
		{searchFocus && 
			<div className='w-screen  h-screen backdrop-blur-md absolute top-0 left-0  z-40 flex items-center justify-center'>
				<span onClick={()=>setsearchFocus(false)} className='absolute top-4 left-4 shadow-md rounded-md p-2 cursor-pointer hover:text-primary2 z-20'><FontAwesomeIcon icon={faX} />&nbsp;close</span>
				<Searchbox
				setsearchFocus={setsearchFocus}
				sorted={sorted}
				/>	
			</div>
		}
		
				
		<div className='gap-2 text-md h-full flex items-center text-color justify-end'>
		<span className='mr-4 cursor-pointer hover:text-primary' onClick={()=>setsearchFocus(true)}><FontAwesomeIcon icon={faSearch}  onClick={()=>setdrop(!drop)}/>&nbsp;search</span>
		<span className='mr-4 cursor-pointer hover:text-primary' onClick={()=>setdrop(!drop)} ><FontAwesomeIcon icon={faUser}  onClick={()=>setdrop(!drop)}/>&nbsp;account</span>
			{
				drop && (
				<Dropdown/>
				)
			}
		</div>
	</div>
  )
}
