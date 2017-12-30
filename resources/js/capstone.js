$(document).ready(function() {

	function autoFade() {
		let windowWidth = document.body.clientWidth;
		if (windowWidth > 750) {
			$('#banner').animate({
				'opacity': '1'
			}, 500);
		}
	};
  
	autoFade();


	/* Every time the window is scrolled ... */
	$(window).scroll(function() {

		/* Check the location of each desired element */
		$('.hidden').each(function(i) {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({
					'opacity': '1'
				}, 500);
			}
		});
	});

	function width() {
		let windowWidth = document.body.clientWidth;
		let banner = document.getElementById('banner').classList;
		let information = document.getElementById('information').classList;
		let learning = document.getElementById('learning').classList;
		let thesis = document.getElementById('thesis').classList;

		if (windowWidth <= 750) {
			banner.remove("hidden");
			information.remove("hidden");
			learning.remove("hidden");
			thesis.remove("hidden");
		}
	};

	width();

});
