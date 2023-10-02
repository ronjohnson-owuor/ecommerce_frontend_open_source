
import React, { useEffect, useState } from 'react'
import Apirequest from './apirequest';

function useFilterproducts() {
	
	const request = new Apirequest();
	const [product,setProduct] = useState(null || []);
	const [filter,setFilter] = useState('');
	
	useEffect(()=>{
		request.product_request(null,setProduct,'allproduct');
	  },[]);
	  

const keywords = () =>{
	var all_keywords = [];
	if(product != null && product.length > 0){
		product?.map((individual_product)=>{
			if(!all_keywords.includes(individual_product.keyword)){
				all_keywords.push(individual_product.keyword);				
			}
		});
	}
	return all_keywords;
}


const sortProduct = () =>{
	const keyword = keywords();
	var sorted =[];
	if(filter == ''){
	keyword?.map((individual_keyword)=>{
		const filtered =[];
		product?.map((individual_product)=>{
			if(individual_product.keyword.includes(individual_keyword)){
				filtered.push(individual_product);				
			}
		});
		var individual_product_sorting = {
			keyword:individual_keyword,
			products:[filtered]
		};
		sorted.push(individual_product_sorting);
	});		
	}else{
		const filtered = [];
		if(product !== null){
					product?.map((individual_product)=>{
			if(individual_product.keyword.includes(filter)){
				filtered.push(individual_product);				
			}
		});
		}

		sorted.push({
			keyword:filter,
			products:filtered
		});
	}
	return sorted;
}

const [sort, setSort] = useState([]);
useEffect(()=>{
	setSort(sortProduct());
  },[filter,product]);
  

return {
	keyword:keywords(),
	sorted:sort,
	setfilter:setFilter,
	filter:filter
}
}

export default useFilterproducts