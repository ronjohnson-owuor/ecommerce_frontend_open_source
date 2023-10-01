import React from 'react'
import useCart from '../modules/useCart'

function Footer() {
  const {total} = useCart();
  return (
	<div className='w-full min-h-[80px] bg-gradient-to-r from-primary to bg-primary2 gap-4 flex-wrap text-white flex items-center justify-center font-NotoSansNabataean m t-10'>
    <h3>&copy;Lynne enterprise</h3>
    <span className='text-sm text-overlay'>Email:lynneenterprise@gmail.com</span>
    <span className='text-sm text-overlay'>Telephone:+2547225782851</span>
    
    <div className='w-full flex flex-col justify-center items-center'>
      <h3 className='underline'>useful link</h3>
      <div className='flex flex-col sm:flex-row gap-2'>
              <a className='text-sm text-overlay' href="/cart">my cart( {total} products)</a>
      <a className='text-sm text-overlay' href="/about">about shop</a>
      <a className='text-sm text-overlay' href="/contactus">contact us</a>
      </div>

    </div>
  </div>
  )
}

export default Footer