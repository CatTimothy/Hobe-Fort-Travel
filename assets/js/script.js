function AtOnload() {
	var js_dist = ['/assets/js/mdb.umd.min.js']
	var i=0;
	for (i=0;i<js_dist.length;i++){
		let element = document.createElement("script");
		element.src = js_dist[i];
		document.body.appendChild(element);
	}
	
}
if (window.addEventListener)
  window.addEventListener("load", AtOnload, false);
else if (window.attachEvent)
  window.attachEvent("onload", AtOnload);
else
  window.onload = AtOnload;



	// JavaScript Document// Wrap every letter in a span
	var textWrapper = document.querySelector('.ml1 .letters');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
	  .add({
		targets: '.ml1 .letter',
		scale: [0.3,1],
		opacity: [0,1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 600,
		delay: (el, i) => 70 * (i+1)
	  }).add({
		targets: '.ml1 .line',
		scaleX: [0,1],
		opacity: [0.5,1],
		easing: "easeOutExpo",
		duration: 700,
		offset: '-=875',
		delay: (el, i, l) => 80 * (l - i)
	  }).add({
		targets: '.ml1',
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	  });