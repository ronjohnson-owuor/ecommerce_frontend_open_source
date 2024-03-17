import React, { useEffect, useState } from 'react'
import Apirequest from '../modules/apirequest'
import usePagination from '../modules/usePagination'
import Buttonpagination from './Buttonpagination';
import { ToastContainer } from 'react-toastify';

function Editproduct() {
  const request = new Apirequest();
  const delete_request = new Apirequest();
  const [product,setProduct] = useState([]);
  const [delete_mess,setdelete_mess] = useState(null);
  const[editDetails,seteditDetails] = useState({
    id:null,
    name:"name",
    price:0,
    keyword:""
  });
  const[showEdit,setshowEdit] = useState(false);
  
  useEffect(()=>{
    request.product_request(null,setProduct,'allproduct');
  },[]);
  const {page,posts,change} = usePagination(product,4);
   
  
  function handleDelete(id){
    let isDelete = confirm(`are you sure you want to delete product ${id}`);
    if(isDelete){
      delete_request.order_request({id:id},setdelete_mess,'deleteproduct');
    }
    
  }
  
  
  function handleEdit(id,name,price,keyword){
    seteditDetails({
      id:id,
      name:name,
      price:price,
      keyword:keyword
    });
    setshowEdit(true);
  }
  
  
  
  
  return (
	<div>
    <ToastContainer theme='dark'/>
    
    {
      showEdit && 
      <div className='absolute top-0 left-0 w-full h-screen backdrop-blur-md flex items-center justify-center flex-col'>
    <h1 className='my-2 text-md font-bold'>edit product</h1>
    <span className='border border-color rounded-md p-1 my-4 cursor-pointer' onClick={()=>setshowEdit(false)}>❌ close</span>
    <div className='flex flex-col gap-4'>
      <input type="text" className='w-[200px] h-[40px] border border-color p-2 rounded-md my-2' onChange={(e)=>seteditDetails(prev =>({
        ...prev,
        name:e.target.value
      }))} placeholder={editDetails.name}/>
      <input type="number" className='w-[200px] h-[40px] border border-color p-2 rounded-md my-2' onChange={(e)=>seteditDetails(prev =>({
        ...prev,
        price:e.target.value
      }))} placeholder={editDetails.price} />
      <input type="text" className='w-[200px] h-[40px] border border-color p-2 rounded-md my-2' onChange={(e)=>seteditDetails(prev =>({
        ...prev,
        keyword:e.target.value
        
      }))} placeholder={editDetails.keyword} />
      <button className='w-[200px] h-[40px] bg-primary rounded-md text-white' onClick={() => delete_request.order_request(editDetails,setdelete_mess,"editproduct")}>edit</button>
    </div>
    </div>
    }
    
    
    
    <span>{product.length} product found</span>
    {
      product.length > 0 ?
      <>
      <table className='w-full overflow-x-scroll xl:overflow-x-hidden'>
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
              <button className='hover:underline' onClick={()=>handleEdit(item.id,item.name,item.price,item.keyword)}>edit</button><br />
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