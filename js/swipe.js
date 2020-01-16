function swipedetect(el,callback){var touchsurface=el,swipedir,startX,startY,distX,distY,threshold=150,restraint=100,allowedTime=300,elapsedTime,startTime,handleswipe=callback||function(swipedir){}
touchsurface.addEventListener('touchstart',function(e){var touchobj=e.changedTouches[0]
swipedir='none'
dist=0
startX=touchobj.pageX
startY=touchobj.pageY
startTime=new Date().getTime()},false)
touchsurface.addEventListener('touchend',function(e){var touchobj=e.changedTouches[0]
distX=touchobj.pageX-startX
distY=touchobj.pageY-startY
elapsedTime=new Date().getTime()-startTime
if(elapsedTime<=allowedTime){if(Math.abs(distX)>=threshold&&Math.abs(distY)<=restraint){swipedir=(distX<0)?'right':'left'}
else if(Math.abs(distY)>=threshold&&Math.abs(distX)<=restraint){swipedir=(distY<0)?'up':'down'}}
handleswipe(swipedir)},false)}
var el=document.getElementById('swipe');swipedetect(el,function(swipedir){if(swipedir=='left'){myIndex-=2;myIndex+=document.getElementsByClassName("mySlides").length;myIndex%=document.getElementsByClassName("mySlides").length;clearTimeout(timeout);carousel();}
else if(swipedir=='right'){myIndex%=document.getElementsByClassName("mySlides").length;clearTimeout(timeout);carousel();}})