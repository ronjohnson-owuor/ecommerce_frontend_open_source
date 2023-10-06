import React, { useEffect, useState } from 'react'
import Apirequest from './apirequest';
import { toast } from 'react-toastify';

function useCart() {
	const local_storage = localStorage;
	const cart = local_storage.getItem("cart");
	const request = new Apirequest();
	const [message,setMessage] = useState('');
	
	
	useEffect(()=>{
		if(message !=''){
		toast.success(message);	
		}
		
	},[message]);
	
	const cartEmpty = () =>{
		return cart === null ? true : false
	}
	
	const total_in_cart =  cartEmpty() ? 0 : JSON.parse(cart).length;
	
	// add to cart
	const addTocart = (object) =>{
		const neworder = object;
			neworder.quantity = 1;
		const order =  cartEmpty() ? [] : JSON.parse(cart);
		order.push(neworder);
		if(order.length > 30){
			alert("You have reach the maximum of 30 products please make order and clear your cart for more orders")
		}else{
		local_storage.setItem("cart",JSON.stringify(order));		
		}
		toast.success("product added successfully👌🏿");
	}
	
	
	// delete individual product  from cart
	const deleteaproduct = (id) =>{
		const order = JSON.parse(cart);
		const filtered = order.filter(items => items.id !== id);
		local_storage.setItem("cart",JSON.stringify(filtered));
		window.location.reload();
	}
	
	

	
	// calculate subtotal
	const subtotal = () =>{
		const order = JSON.parse(cart);
		let sub_total = 0;
		if (order){
			order.map(element=>{
				sub_total+= Number(element.price) * Number(element.quantity);
			});
		}
		if(sub_total > 1000){
			sub_total = sub_total/1000 + "K";
		}else if(sub_total > 1000000){ 
			sub_total = sub_total/1000000 + "M";	
		}
		return sub_total
	}
	
		// update quantity of the product 
		const change_quantity = (id,total_quantity) =>{
			const order = JSON.parse(cart);
			order.filter(items => items.id == id).map(product => product.quantity = total_quantity);
			local_storage.setItem("cart",JSON.stringify(order));
			toast.success("quantity changed👌🏿");
		}
	
	
	// deleteall product from the cart
	const deleteAll = () =>{
		const confirm_delete = confirm("are you sure you want to empty your cart");
		if(confirm_delete){
			local_storage.removeItem('cart');
			toast.success("cart cleared");
			window.location.reload();
		}
	}
	
	
	// send cart order to the backend and make order for the customer
	const send_order = () =>{
		const data={
			"data":JSON.parse(cart)
			};
			request.order_request(data,setMessage,"processorder");
	}
	

	
  return {
	cart_empty:cartEmpty(),
	add:addTocart,
	deleteall:deleteAll,
	deleteaproduct:deleteaproduct,
	cart:JSON.parse(cart),
	total:total_in_cart,
	change_quantity:change_quantity,
	subtotal:subtotal(),
	order_server:send_order
  }
}

export default useCart