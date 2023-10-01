import axios from 'axios';

const laravel_request = axios.create({
	 baseURL:import.meta.env.VITE_API_LARAVEL_URL
	});

  export default laravel_request