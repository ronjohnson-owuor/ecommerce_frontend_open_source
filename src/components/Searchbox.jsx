import React, { useEffect, useState } from "react";
import useCart from '../modules/useCart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Searchbox({ setsearchFocus,sorted}) {
	const [filtered,setFiltered] = useState([]);
	const[search,setSearch] = useState('');
	const {add} = useCart();
	const filterProduct = () =>{
		const ready_product_after_filter = [];
		sorted.filter(items =>items.keyword.includes(search))
		.map(ready_product =>{
			ready_product.products.map(items=>{
				items.map(item_array=>{
					ready_product_after_filter.push(item_array);
				})
			})
		});
		setFiltered(ready_product_after_filter);
	}
	
	useEffect(() => {
			filterProduct();
	}, [search]);
	
	
  return (
    <div
      className={` w-[98%] sm:w-[60%] h-[500px] p-4 relative  rounded-md shadow-md bg-white ${
        filtered.length > 4 && "overflow-y-scroll"
      }`}
    >
		<input
			onFocus={()=>setsearchFocus(true)}
			 onChange={(e)=>setSearch(e.target.value)}  
       className='w-[99%] shadadow-lg mb-10 mt-10 sm:mt-4  border border-color rounded-md  h-[50px]  outline-none text-color pl-2' 
       type="text" 
       placeholder='search products' />
      {filtered.map((item) => (
        <div className="w-[96%] shadow-sm h-200px] flex my-4 gap-2 text-color text-sm p-2 rounded-md">
            <img
            loading="eager"
              className="w-[100px] h-full mr-2 object-cover rounded-md"
              src={item.image_link}
              alt="product image"
            />
          <div className="">
            <h3 className="text-xl ">{item.name}</h3>
            <p className="text-sm text-primary2">ksh.{item.price}</p>
            <br />
            <button
              className="w-[100px] h-[40px] border border-color rounded-md hover:text-white hover:bg-primary hover:border-none "
              onClick={() => add(item)}
            >
             <FontAwesomeIcon icon={faCartPlus}/>&nbsp;add 
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Searchbox;
