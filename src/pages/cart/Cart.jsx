import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Customorder from '../../components/Customorder'
import useCart from '../../modules/useCart'
import usePagination from '../../modules/usePagination'
import Buttonpagination from '../../components/Buttonpagination'

function Cart() {
  const {cart_empty,cart,deleteall,deleteaproduct,change_quantity,subtotal,total,order_server} = useCart();
  const {page,posts,change} = usePagination(cart_empty? []:cart,2);
  return (
	<div className='w-full min-h-screen bg-background font-NotoSansNabataean '>
    <Navigation/>
    <Breadcrumb pagename="cart"/>
    
    {/* start of cart listing */}
    <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 min-h-screen mx-4'>
      
      {     
      cart_empty ? <h3 className='text-sm text-color mt-10'>No item in the cart  <br /> or make a custom order here</h3>
      :
      <>
            {/* CART:section 1 */}
            <div>
              {
                posts.map(element =>(
                  <div key ={element.id} className='w-[100%] sm:w-[400px] h-[300px] sm:h-[150px] mx-1 sm:mx-4 my-4  shadow-md flex flex-col sm:flex-row'>
                        <div className='w-full sm:w-1/3 h-[150px] sm:h-full shadow-md '><img src={element.image_link} className='w-full h-full object-cover' alt="product" /></div>
                        <div className='w-[3/4] flex flex-col text-color px-2'>
                            <span>{element.name}</span>
                            <span>quantity: <input className='bg-transparent border-none w-[50px] h-[40px]' type="number" min={1} onChange={(e)=>change_quantity(element.id,e.target.value)} placeholder={element.quantity} /></span>
                            <button onClick={()=>deleteaproduct(element.id)} className='w-[100px] h-[40px] border border-color text-color hover:text-white rounded mt-4'>remove </button>
                        </div>
                      </div>                   
                ))
              }
              {page && (
                <Buttonpagination item={cart} change={change}  pages={page}/>
              )}
      </div>

      </>

      }
      

      
      {/* CART:section 2 */}
      {
        !cart_empty && (
      <div className='flex items-center justify-start text-color flex-col my-10 sm:my-2'>
      <h3 className='text-[20px] font-bold '>Total items:{total} &nbsp;</h3>
        <h3 className='text-[20px] font-bold '>Total  price: &nbsp;{subtotal}/=</h3>
        <button className='w-[100px] h-[40px] bg-primary2 hover:bg-primary text-white rounded mt-4' onClick={()=>order_server()}>make order</button>
        <button onClick={()=>deleteall()} className='w-[100px] h-[40px] border border-color hover:text-white text-color rounded mt-4'>delete all</button>
      </div>          
        )
      }
      
      <div id="custom_order">
          <Customorder/>
        </div>

    </div>
    <Footer/>
  </div>
  )
}

export default Cart