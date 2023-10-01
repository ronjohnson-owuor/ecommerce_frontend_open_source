import React, { useEffect, useState } from 'react'
import Apirequest from '../modules/apirequest';

function Addproduct() {
  const [image,setImage] = useState(null);
  const form_data = new FormData();
  const request = new Apirequest();
  const [server_message,setserver_message] = useState(null);
  const [product_details,setproduct_details] = useState({
    product_name:"",
    product_price:0,
    product_keyword:'',
    image:''
  }) 
  
  
  
  
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
    setproduct_details((prev)=>({
      ...prev,
      image:selectedImage
    }))
  };
  
  
  const handleUpload = () =>{
      form_data.append('product_name',product_details.product_name);
      form_data.append('product_price',product_details.product_price);
      form_data.append('product_keyword',product_details.product_keyword);
      form_data.append('image',product_details.image);
      // send data to the server
      request.product_request(form_data,setserver_message,"addproduct");
  }
  
  
  useEffect(()=>{
   console.log(server_message); 
  },[server_message])
  
  return (
	<div className='my-10  bg-transparent'>
    <div className='flex flex-col w- sm:w-[80%] mx-4  min-h-full '>
      <input className='w-full sm:w-[300px] h-[40px] outline-none bg-transparent my-4 rounded-md text-color border border-color' type="text" onChange={(e)=>setproduct_details((prev)=>({
        ...prev,
        product_name: e.target.value
      }))} placeholder='name of the product' />
      <input className='w-full sm:w-[300px] h-[40px] outline-none bg-transparent my-4 rounded-md text-color border border-color' type="text" onChange={(e)=>setproduct_details((prev)=>({
        ...prev,
        product_keyword: e.target.value
      }))} placeholder='keywords eg jacket,wall decoration' />
      <input className='w-full sm:w-[300px] h-[40px] outline-none bg-transparent my-4 rounded-md text-color border border-color' type="number" onChange={(e)=>setproduct_details((prev)=>({
        ...prev,
        product_price: e.target.value
      }))} placeholder='price' />
      <label htmlFor="image"> click to select image </label>
      <input className='hidden' id='image' onChange={handleImageUpload} type="file"  />
      <img src={image?image:null} className='w-[250px] object-cover border my-4 h-[150px] ' alt="choosen image" />
      <button className='border w-[200px] h-[40px] my-4 rounded-md border-color text-white hover:border-none hover:bg-primary' onClick={handleUpload}>add product</button>
    </div>
  </div>
  )
}

export default Addproduct