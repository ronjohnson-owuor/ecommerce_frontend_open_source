import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Products from '../../components/Products'

function Home() {
  // this is not working try fixing this please👇
  document.title ='Lynne enterprise| Home';
  return (
	<div className='bg-background min-h-screen'>
    <Navigation/>
    <Products/>
    <Footer/>
  </div>
  )
}

export default Home