import React, { useEffect, useState } from 'react'
import Apirequest from '../modules/apirequest';
import usePagination from '../modules/usePagination';
import Buttonpagination from './Buttonpagination';

function Vieworder() {
	const [order,setOrder] = useState([]);
	const [message,setMessage] = useState('');
	const request = new Apirequest();
	const {posts,page,change} = usePagination(order,4);
	
	// request the order from the database
	useEffect(()=>{
		request.order_request(null,setOrder,"getorder");	
	},[]);
	
	
	useEffect(()=>{
		console.log(order);
	},[order]);
	
	
  return (
	<div>
    <span>{order.length} orders found</span>
    {
      posts.length > 0 ?
      <>
      <table>
        <thead >
          <tr>
            <th className='mx-4 my-2 border px-4'>image</th>
            <th className='mx-4 my-2 border px-4'>product name</th>
            <th className='mx-4 my-2 border px-4'>quantity</th>
            <th className='mx-4 my-2 border px-4'>customer name</th>
			<th className='mx-4 my-2 border px-4'>customer email</th>
			<th className='mx-4 my-2 border px-4'>customer location</th>
			<th className='mx-4 my-2 border px-4'>customer phone</th>
            <th className='mx-4 my-2 border px-4'>delivered</th>
          </tr>
        </thead>
        <tbody>
          {      
          posts.map((item)=>(
           <tr>
            <td className='sm:mx-4 sm:my-2 border sm:px-4'><img src={item.product_image} className='w-[100px] h-[100px] rounded-md p-2 object-cover' alt="image" /></td>
            <td className='mx-4 my-2 border px-4'>{item.product_name}</td>
            <td className='mx-4 my-2 border px-4'>{item.product_quantity}</td>
            <td className='mx-4 my-2 border px-4'>{item.customer_name}</td>
			<td className='mx-4 my-2 border px-4'>{item.customer_email}</td>
			<td className='mx-4 my-2 border px-4'>{item.customer_location}</td>
			<td className='mx-4 my-2 border px-4'>{item.customer_number}</td>
            <td className='mx-4 my-2 border px-4'>
              <button className='hover:underline' onClick={()=>request.order_request({id:item.id},setMessage,"delivered-order")}>deliver</button>
            </td>
           </tr>         
          ))
           }         
        </tbody>
      </table>
      
      <Buttonpagination item={order} change={change}  pages={page}/>
      </>
      :
      <h3> no orders found </h3>
    }
  </div>
  )
}

export default Vieworder