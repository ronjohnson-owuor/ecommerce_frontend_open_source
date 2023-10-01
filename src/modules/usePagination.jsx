import React, { useState } from 'react'

// item is the array of products that are in the sent from the server in the product.jsx page
function usePagination(item,per_page) {
	const [currentPage,setcurrentPage] = useState(1);
	const product_per_page = !per_page ? 4 :per_page;
	
	const lastPostIndex = currentPage * product_per_page;
	const firstPostIndex = lastPostIndex - product_per_page;
	// just display the current page only 
	const currentPost = item?.slice(firstPostIndex,lastPostIndex);
	
	const number_of_pages = Math.ceil(item?.length/product_per_page);
	
	// this get the number of pages that are in the  item array and put the pages to an array which will be used to generate buttons for pagination
	const get_pages = () =>{
		let pages = [];
		for(var i= 1; i <= number_of_pages; i++){
			pages.push(i);
		}
		if(pages.length == 1){
			return null
		}else{
		return pages;			
		}
	}
	
	
	// change the current page when the button is clicked
	const change_page = (page_number) =>{
		setcurrentPage(page_number);
	}
	
	
	
  return {
	page:get_pages(),
	change:change_page,
	posts:currentPost
  }
}

export default usePagination