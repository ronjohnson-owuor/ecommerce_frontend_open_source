import React, { useState } from 'react'
import Adminregister from '../../components/Adminregister'
import Adminaction from '../../components/Adminaction';

function Admin() {
	const [allowed,setAllowed]  = useState(false);
	
	
  return (
	<div className='w-full min-h-screen bg-background'>
		{
			!allowed && (
		<Adminregister setAllowed={setAllowed}/>				
			)
		}
		
		{
			allowed && (
				<Adminaction/>
			)
		}

	</div>
  )
}

export default Admin