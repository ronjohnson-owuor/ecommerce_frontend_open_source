import React from 'react'
import yarn from '../../assets/yarn.png';
import Footer from '../../components/Footer';

function About() {
  return (
	<div className='text-color font-NotoSansNabataean min-h-screen'>
		<div className='w-full grid grid-cols-1 sm:grid-cols-2 items-center mb-10 sm:mb-2'>
			<div className='mx-10 sm:mx-2'>
			<h1 className='font-extrabold mt-10 sm:mt-2 text-3xl sm:text-2xl md:text-3xl xl:text-5xl text-primary mb-2'>Your Premier Destination for Crocheting Creations and Décor</h1>
			<p className='text-sm w-[95%] sm:w-[80%]'>Dont look further for quality crotcheted and knitted items and clothes for yourself, home and offices again.</p>
			</div>
			<img src={yarn} className='animate-pulse hidden sm:block' alt="yarn logo" />
		</div>
			<div className='w-full mt-10 mb-20 flex items-center justify-center flex-col'>
				<h1 className='text-4xl font-bold text-white'>our vision</h1>
				<p className='text-sm w-[95%] sm:w-[50%] mt-4'>At Lynne Enterprise, we strive to be the ultimate online destination for all things crochet, offering a platform that blends tradition, innovation, and community to bring you a high quality product for your homes and offices.</p>
			</div>
			<div className='w-[95%] mx-4 my-10 mb-0 pb-10 grid grid-cols-1 sm:grid-cols-2 gap-4'>
			{/* core values of the company */}
			<div>
				<h1 className='text-white text-md font-bold mb-4'>Core values</h1>
				<ul className='w-[95%] sm:w-[80%] text-sm'>
					<ol className='my-4'><span className='underline'>Creativity:</span>We value creativity and innovation to bring  you unique products from our store all the time.</ol>
					<ol className='my-4'><span className='underline'>Quality:</span> We are committed to showcasing top-notch, handcrafted items that reflect the dedication and skill of our artisans.</ol>
					<ol className='my-4'><span className='underline'>Community:</span> Crafting Elegance is more than just a marketplace. It's a place to connect, share ideas, and learn from one another, fostering a sense of belonging among our users.You can subscribe to our <a href="#">youtube channel</a> and join our community</ol>
				</ul>
			</div>
			{/* our offering */}
			<div>
				<h1 className='text-white text-md font-bold mb-4'>Our offering</h1>
				<ul className='w-[95%] sm:w-[80%] text-sm'>
					<ol className='my-4'><span className='underline'>Exquisite Crochet Products:</span> Discover an ever-expanding catalog of crochet products, from home decorations  to hand knitted clothes, each telling a unique story through yarn and stitches.</ol>
					<ol className='my-4'><span className='underline'>Décor with a Personal Touch:</span> Transform your living spaces with handmade décor items, including crochet wall hangings, pillow covers, and table runners, all crafted with love and care.</ol>
					<ol className='my-4'><span className='underline'>Educational Resources:</span> Learn the art of crochet through tutorials, patterns, and workshops, making it accessible to beginners while offering advanced techniques for experts.You can follow our youtube channel and start learning how to crotchet and knit for free.</ol>
				</ul>
			</div>
			</div>
			
		<Footer/>
			
	</div>
  )
}

export default About