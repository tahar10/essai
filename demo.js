(function($) {

	var thing = 1;

	$('#menu-btn').on('click', function(event) {
		var thing = event.type;
		$('.page').toggleClass('page-menu-open');
	})

})(jQuery);
