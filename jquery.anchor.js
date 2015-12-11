(function($) {
	$.fn.jAnchor = function(options) {
	
		var defauts = {
			'duration': 400,
			'easing': 'swing'
		};

		var param = $.extend(defauts, options);

		return this.each(function(i, element) {
			$(element).on('click', function(e) {
				var h = this.hash;
				$('body, html').animate({
					scrollTop: $(h).offset().top
				}, param.duration, param.easing);

				hash( h );
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