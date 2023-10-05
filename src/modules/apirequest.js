
import laravel_request from './laravelrequest';
import useToken from './useToken';
import {toast} from 'react-toastify';

class Apirequest {
	constructor(){
		const {decrypted,encrypt_token,is_token} = useToken();
		/* where __UUTK__ is user token and should be used for every request that require token validation */
		this.userToken = decrypted;
		this.hasToken = is_token;
		this.encrypt_token = encrypt_token;
	}
		
	python_backend_request(object,response_setter){
		alert("making request to python");
	}
	
	
	/* 
	Request type is either true or false if TRUE is signup if FALSE is login
	 */
	async login_and_signup(object,response_setter,token,request_type){
			/* 
			This request without a token should only be used for login and sign up
			only any other use might cause an error
			 */
			var response;
			if(request_type){
				 response = await laravel_request.post("signup",{...object});
			}
			
			if(!request_type){
				 response = await laravel_request.post("login",{...object});
			}
			
			if(response.status !== 200){
				
				response_setter(`There was an error: ${response.data}`);
				toast.error("there was an error please try again");
			}
			
			response_setter(response.data.message);
			toast.success(response.data.message);
			
			if(response.data.token){
			const plainToken = response.data.token;
			this.encrypt_token(plainToken);
			}else{
				toast.error("check the input type....try again🙏🏿");
			}
	}
	
	
	async product_request(object,response_setter,path){
		var response;		
		 response = await laravel_request.post(path,object);
		 if(!response.data.message){
			response_setter("an error occurred");
			toast.error("an error occured try again");
		 }
		 response_setter(response.data.message);
	}
	
	async order_request(object,response_setter,path){
		var response;
		if(!this.hasToken){
			response_setter("You need to log complete this operation");
			toast.error("You need to log complete this operation");
			return null
		}
		
		 response = await laravel_request.post(path,object,{
			headers: {
				'Authorization': `Bearer ${this.userToken}`
			  }
		 });
		 if(!response.data.message){
			response_setter("an error occurred");
			toast.error("an error occured try again");
		 }else{
			response_setter(response.data.message);
			if(response.data.clear){
				localStorage.removeItem("cart");
				window.location.reload();
			}
		 }
		 
	}
		
  }
  
  export default Apirequest;