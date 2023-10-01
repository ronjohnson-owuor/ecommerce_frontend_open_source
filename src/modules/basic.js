
class Basic {
  redirect(url){
	window.location.href = url;
  }
  
  // check if the user has reached the bottom of the page
  reachedBottom(){
    console.log(window.innerHeight + document.documentElement.scrollTop === document.body.offsetHeight) ;
  }
  
}

export default Basic;