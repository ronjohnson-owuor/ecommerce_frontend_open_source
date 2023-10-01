import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Breadcrumb({pagename}) {
	const [type,settype] = useState(true);
  return (
	<div className='shadow-sm rounded-sm text-color bg-background max-w-[130px]  p-4 flex'>
		<div className={`${type ? 'flex' : 'hidden' }`}>
			<Link to ='/'>home</Link>
		<span>/{pagename}</span>		
		</div>
 
		<span className='mx-2 cursor-pointer font-bold text-[12px] my-1 hover:text-white' onClick={()=>settype(!type)}>{type ? 'X' : '- show' }</span>
	</div>
  )
}

export default Breadcrumb