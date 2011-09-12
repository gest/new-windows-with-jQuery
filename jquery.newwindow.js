(function($) {
    
    $.fn.newWindow = function() {
	//do ones for pdf/word/ docs options {to extend files}
//New Window:
//Open external links in a new window
//adds title to inform users on hover that link opens in a new window;
//adds additional text for screen readers to say it opens in a new window, screen readers don't normally read title on links; 
//must use css to show a new window icon for sighted users and to hide assistive text off the page
//used background image as bug in JAWS 11 stops it from reading alt text in link containing other text
        return this.each(function() {
            $(this).addClass('newwindow-active').attr('target', '_blank');			
			var title = $(this).attr('title');
			title
			? $(this).attr('title', title + ' (Opens in a new window)')
			: $(this).attr('title', 'This link opens in a new window');
			$('<span class="assistive-text"> (opens in a new window)</span>').appendTo($(this));  
        });
    };
    
})(jQuery);