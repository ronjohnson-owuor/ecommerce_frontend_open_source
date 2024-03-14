import Accounts from "../components/Accounts";
import Customorder from "../components/Customorder";
import Report from "../components/Report";
import About from "../pages/about/About";
import Admin from "../pages/admin/Admin";
import Cart from "../pages/cart/Cart";
import Contactus from "../pages/contactus/Contactus";
import Home from "../pages/home/Home";
import Settings from "../pages/settings/Settings";

const appRoutes = [
	{
		path:'/',
		element:<Home/>
	},
	{
		path:'/cart',
		element:<Cart/>
	},
	{
		path:'/custom',
		element:<Customorder/>
	},
	{
		path:'/admin',
		element:<Admin/>
	},
	{
		path:'/accounts',
		element:<Accounts/>
	},
	{
		path:'/contactus',
		element:<Contactus/>
	},
	{
		path:'/report',
		element:<Report/>
	},
	{
		path:'/about',
		element:<About/>
	},
/* 	{
		path:'/settings',
		element:<Settings/>
	}, */
	{
		path:'*',
		element:<Home/>
	}
];

export default appRoutes
