import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Apirequest from '../../modules/apirequest';

function ContactUs() {
  // State variables for the contact form
  const [message, setMessage] = useState('');
  const [server_message,setserver_message] = useState('')
  const request = new Apirequest();
  
  
  
  
  useEffect(()=>{
	console.log(server_message);
  },[server_message]);
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission
	if(message){
		const data = {
			message:message
		}
    request.order_request(data,setserver_message,"addmessage");
	}

  };

  return (
    <div className="min-h-screen bg-background font-NotoSansNabataean text-color">
		<div className='w-full flex items-center justify-center flex-col'>
      	<h2 className='text-3xl font-bold  mt-4 mb-2'>Contact Us</h2>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
			className='w-[400px] h-[200px]'
			placeholder='enter your message'
            required
          ></textarea>
        <button className='w-[400px] h-[40px]  bg-primary text-white hover:shadow-2xl' type="submit" onClick={handleSubmit}>Submit</button>
		<button onClick={()=>window.location.href="/"} className='w-[400px] h-[40px]   text-color hover:shadow-2xl' type="submit">back home</button>		
		</div>


      <div className='w-full flex flex-col sm:flex-row items-center sm:justify-center mt-10'>		
		{/* location */}
		<div className='shadow-xl mx-2 p-4 w-[50%] sm:w-inherit'>
			<p>
          <FontAwesomeIcon  className='text-5xl sm:text-2xl text-white'  icon={faMapMarkerAlt} />
        </p>
		<span className='text-primary font-bold'>Location</span><br />
		<span className='text-sm'>Nairobi,Kenya</span>
		</div>
		
		{/* telehone */}
		<div className='shadow-xl mx-2 p-4 w-[50%] sm:w-inherit'>
		<p>
		<FontAwesomeIcon  className='text-5xl sm:text-2xl text-white'  icon={faPhone} />
        </p>
		<span className='text-primary font-bold'>Telephone</span><br />
		<span className='text-sm'>+254722578251</span>
		</div>
		
		{/* email  */}
		<div className='shadow-xl mx-2 p-4 w-[50%] sm:w-inherit'>
		<p>
		<FontAwesomeIcon className='text-5xl sm:text-2xl text-white'   icon={faEnvelope} />
        </p>
		<span className='text-primary font-bold'>Email</span><br />
		<span className='text-sm'>lynneenterprise@gmail.com</span>		
		</div>
      </div>
	  <div>
	  </div>
    </div>
  );
}

export default ContactUs;
