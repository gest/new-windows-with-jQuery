(function($) { 
    $.fn.newWindow = function() {
        return this.each(function() {
			// add a class to the link that can be used for styling purposes; open the link in a new window
            $(this).addClass('newwindow-active').attr('target', '_blank');	
			// add/amend title to inform users on hover that link opens in a new window;
			var title = $(this).attr('title');
			title
			? $(this).attr('title', title + ' (Opens in a new window)')
			: $(this).attr('title', 'This link opens in a new window');
			// add additional text for screen reader/keyboard only users to inform them that the link opens in a new window
			// screen readers don't normally read title attributes on links; keyboard only users won't activate the tooltip
			$('<span class="assistive-text"> (opens in a new window)</span>').appendTo($(this));  
			// if desired use CSS image replacement technique to show a new window icon for sighted users and hide the assistive text off the page
        });
    };
})(jQuery);


