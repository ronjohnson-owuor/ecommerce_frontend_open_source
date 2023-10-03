
class Basic {
  redirect(url){
	window.location.href = url;
  }
  
  // check if the user has reached the bottom of the page
  reachedBottom(){
    const window_height = window.innerHeight;
		const current_scroll_position = document.documentElement.scrollTop;
		const scroll_height =document.documentElement.scrollHeight;
		if((window_height+current_scroll_position)+1 >= scroll_height){		
			return true;
		}
  }
  
}

export default Basic;