//document ready function //
$(function() {

	/////////Cache reference to window and animation items (hidden)/////////
	const $hidden = $('.hidden');
	const $window = $(window);

	if ($window.width() >= 750) {

		///////measurements of window dimensions///////
		function check_if_in_view() {
			let window_height = $window.height();
			let window_top_position = $window.scrollTop();
			let window_bottom_position = (window_top_position + window_height);

			$.each($hidden, function() {
				let $element = $(this);
				let element_height = $element.outerHeight();
				let element_top_position = $element.offset().top;
				let element_bottom_position = (element_top_position + element_height);

				////////check to see if this current container is within viewport////////
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= (window_bottom_position - 112))) {
					$element.addClass('bounceUp');
				}
			});
		};

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');


		//////////changing color of header and nav//////////
		$window.on('scroll', function changeHeaderColor() {
			let top = $('#top');
			let headContent = $('#headContent');
			let headSpan = $('#headSpan');
			let a = $('.headA');
			let scrollTop = $window.scrollTop()

			if (scrollTop >= 120) {
				top.addClass('scroll');
				headContent.addClass('scroll');
				a.addClass('scroll');
			} else {
				top.removeClass('scroll');
				headContent.removeClass('scroll');
				a.removeClass('scroll');
			}
		});

	} else {
		$(".hidden").removeClass("hidden");
	}

});
