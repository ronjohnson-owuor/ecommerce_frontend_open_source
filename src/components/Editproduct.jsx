import React, { useEffect, useState } from 'react'
import Apirequest from '../modules/apirequest'
import usePagination from '../modules/usePagination'
import Buttonpagination from './Buttonpagination';

function Editproduct() {
  const request = new Apirequest();
  const delete_request = new Apirequest();
  const [product,setProduct] = useState([]);
  const [delete_mess,setdelete_mess] = useState(null);
  useEffect(()=>{
    request.product_request(null,setProduct,'allproduct');
  },[]);
  const {page,posts,change} = usePagination(product,4);
  
  useEffect(()=>{
    console.log(product);
  },[product]);
  
  useEffect(()=>{
    console.log(delete_mess);
  },[delete_mess]);
  
  
  function handleDelete(id){
    let isDelete = confirm(`are you sure you want to delete ${id}`);
    if(isDelete){
      delete_request.product_request({id:id},setdelete_mess,'deleteproduct');
    }
    
  }
  
  return (
	<div>
    <span>{product.length} product found</span>
    {
      product.length > 0 ?
      <>
      <table>
        <thead >
          <tr>
            <th className='mx-4 my-2 border px-4'>image</th>
            <th className='mx-4 my-2 border px-4'>name</th>
            <th className='mx-4 my-2 border px-4'>price</th>
            <th className='mx-4 my-2 border px-4'>tags</th>
            <th className='mx-4 my-2 border px-4'>action</th>
          </tr>
        </thead>
        <tbody>
          {      
          posts.map((item)=>(
           <tr>
            <td className='sm:mx-4 sm:my-2 border sm:px-4'><img src={item.image_link} className='w-[100px] h-[100px] rounded-md p-2 object-cover' alt="image" /></td>
            <td className='mx-4 my-2 border px-4'>{item.name}</td>
            <td className='mx-4 my-2 border px-4'>{item.price}</td>
            <td className='mx-4 my-2 border px-4'>{item.keyword}</td>
            <td className='mx-4 my-2 border px-4'>
              <button className='hover:underline'>edit</button><br />
              <button className='hover:underline' onClick={()=>handleDelete(item.id)}>delete</button>
            </td>
           </tr>         
          ))
           }         
        </tbody>
      </table>
      
      <Buttonpagination item={product} change={change}  pages={page}/>
      </>
      :
      <h3> no product found </h3>
    }
  </div>
  )
}

export default Editproduct