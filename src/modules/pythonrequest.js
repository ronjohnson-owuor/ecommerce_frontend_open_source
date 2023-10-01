const python_request = axios.create({
	baseURL:import.meta.env.VITE_API_PYTHON_URL
   });

 export default python_request