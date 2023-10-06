import Cookies from 'js-cookie'
import React from 'react'
import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';

function useToken() {
const token = Cookies.get(import.meta.env.VITE_TOKEN_NAME);
const encryption_key = import.meta.env.VITE_SECRET_ENCRYPTION_KEY;


const decryptedToken = () =>{
	if(!token){
		return false;
	}
	
	const decrypted_token = CryptoJS.AES.decrypt(token, encryption_key).toString(CryptoJS.enc.Utf8);	
	return decrypted_token;
}


const encrypt_token = (data) =>{
	const encryptedData_token = CryptoJS.AES.encrypt(data,encryption_key).toString();
	Cookies.set(import.meta.env.VITE_TOKEN_NAME,encryptedData_token,{ expires: 28});	
	console.log("token secure 🔐");
}

const delete_token = () =>{
	Cookies.remove(import.meta.env.VITE_TOKEN_NAME);
	toast.success("you are logged out");
	window.location.reload();
}


return{
	encrypted:token,
	is_token: token ? true : false,
	decrypted: decryptedToken(),
	encrypt_token:encrypt_token,
	delete_token:delete_token
};
}

export default useToken