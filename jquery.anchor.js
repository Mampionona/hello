(function($) {
	$.fn.jAnchor = function(options) {
	
		var defauts = {
			'duration': 400,
			'easing': 'swing'
		};

		var param = $.extend(defauts, options);

		return this.each(function(i, element) {
			$(element).on('click', function(e) {
				$('body, html').animate({
					scrollTop: $(this.hash).offset().top
				}, param.duration, param.easing);

				hash( this.hash );
				e.preventDefault();
			});
		});
	};
})(jQuery);

hash = function(h) {
	if (history.pushState)
		history.pushState(null, null, h);
	else
		location.hash = h;
}