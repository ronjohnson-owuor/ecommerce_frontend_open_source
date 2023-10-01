import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import { Link } from 'react-router-dom'
import Accounts from '../../components/Accounts'
import Cookies from 'js-cookie';

function Settings() {
	const token = Cookies.get("__UUTK__");
  return (
	<div className='w-full min-h-screen bg-background font-NotoSansNabataean  text-color'>
		<Breadcrumb pagename="settings"/>
		{
			token ? 
		<div className='w-3/4 h-[300px] grid grid-cols-2 mx-40 gap-4'>
			<div className=' w-full h-full items-center border hover:border-none cursor-pointer justify-center hover:bg-primary hover:text-white flex flex-col'>
				<span className='text-[100px]'>💻</span>
				system settings
			</div>
			<div className=' w-full h-full items-center cursor-pointer border hover:border-none justify-center hover:bg-primary hover:text-white flex flex-col'>
				<span className='text-[100px]'>👤</span>
				user settings
			</div>
		</div>			
			:
		<Accounts/>			
		}


		
		<div className='w-full flex justify-center my-4'>
			<Link className='hover:text-primary' to='/'>Back home</Link>
		</div>
	</div>
  )
}

export default Settings