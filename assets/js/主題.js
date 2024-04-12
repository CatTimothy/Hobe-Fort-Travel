window.onload = function() {
  var mySwiper = new Swiper ('.swiper', {
	keyboardControl : true,
	mousewheelControl : true,
	mousewheelEventsTarged : '#body',
    loop: false, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}