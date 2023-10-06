import React from 'react'
import { Link } from 'react-router-dom'
import useToken from '../modules/useToken'

function Dropdown(){
	const {is_token,delete_token} = useToken();
  return (
	<div className='w-[200px] h-[200px] rounded shadow-md z-10 absolute right-[2%] top-full font-NotoSansNabataean'>
		{
			is_token && (
		<ul className='w-full bg-background z-20 min-h-full rounded'>
			<Link to='/cart' className=' my-2  w-full text-center rounded text-sm hover:bg-background text-color hover:text-white'><li className='  w-full text-center rounded text-sm font-bold my-4 hover:bg-background text-color  hover:text-primary '>cart</li></Link>
			<Link to='/cart#custom_order' className=' my-2  w-full text-center rounded text-sm hover:bg-background text-color hover:text-white'><li className='  w-full text-center rounded text-sm font-bold my-4 hover:bg-background text-color  hover:text-primary '>custom order</li></Link>
			<Link to='/report' className=' my-2  w-full text-center rounded text-sm hover:bg-background text-color hover:text-white'><li className='  w-full text-center rounded text-sm font-bold my-4 hover:bg-background text-color  hover:text-primary '>report</li></Link>
			{/* the settings feature is coming on the next update */}
			{/* <Link to='/settings' className=' my-2  w-full text-center rounded text-sm hover:bg-background text-color hover:text-white'><li className=' my-2  w-full text-center rounded text-sm hover:bg-background text-color hover:text-white hover:border-b-2 hover:border-color '>settings</li></Link> */}
			<li className='  w-full text-center rounded text-sm font-bold my-4 hover:bg-background text-color  hover:text-primary ' onClick={()=>delete_token()}>log out</li>
		</ul>				
			)
		}
		
		{
		!is_token && (
			<p>Your are not logged in <br />  <a className='underline text-primary' href="/accounts">click here</a> to login</p>
		)	
		}

	</div>
  )
}

export default Dropdown