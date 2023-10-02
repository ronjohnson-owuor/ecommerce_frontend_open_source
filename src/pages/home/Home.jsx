import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Products from '../../components/Products'
import useFilterproducts from '../../modules/useFilterproducts';

function Home() {
  // this is not working try fixing this please👇
  document.title ='Lynne enterprise| Home';
  const {sorted} = useFilterproducts()
  return (
	<div className='bg-background min-h-screen'>
    <Navigation/>
    <Products/>
    {
      sorted.length !== 0 &&(
      <Footer/>      
      )
    }

  </div>
  )
}

export default Home