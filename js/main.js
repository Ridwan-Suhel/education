(function ($) {
"use strict";

// sticky menu
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 250) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('#nav').onePageNav({
	currentClass: 'current',
	scrollOffset: top_offset,
	scrollSpeed: 750,
	scrollThreshold: 0.4,
});




})(jQuery);