const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// Mouse Follower
function mousefollower(){
  
var pg1Content = document.querySelector(".pg-1-content");
var mousefollower = document.querySelector("#mouse-follower");

pg1Content.addEventListener('mousemove', function(mz){
	gsap.to(mousefollower,{
		x: mz.x,
		y: mz.y
	});
});

pg1Content.addEventListener('mouseenter', function() {
     gsap.to(mousefollower,{
		scale: 1
	});
})

pg1Content.addEventListener('mouseleave', function() {
	gsap.to(mousefollower,{
		scale: 0
	});
});
}
mousefollower();

// swipper js code
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    });

// gsap timeline for loader
var timeline = gsap.timeline();

timeline.from('#loader h3',{
	x: 60,
	opacity: 0,
	duration: 2,
	stagger: 0.2
});

timeline.to('#loader',{
	x: 70,
	opacity: 0,
	duration: 1,
	stagger: 0.2
});
timeline.to('#loader',{
  display: "none"
});

// Rejouice text animation

timeline.from('span',{
	x: 100,
	opacity:0
});
// para anim
gsap.from('.para h1',{
	x:600,
	opacity:0,
	delay: 1,
	stagger:1,
	duration: 2
})

const upperparent = document.querySelector('.upper-patent')
const menu = document.querySelector('#menu');
menu.addEventListener("click", function () {
	 upperparent.style.display = "block"
})