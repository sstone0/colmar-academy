$(document).ready(function() {

	//Cache reference to window and animation items (hidden)
	var $hidden = $('.hidden');
	var $window = $(window);

	//measurements of window dimensions
	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($hidden, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
				$element.addClass('bounceUp');
			}
		});
	}
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	//removes hidden class for mobile screens
	function noFade() {
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
	noFade();

});
