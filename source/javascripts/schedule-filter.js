//= require "jquery"

(function($) {
	$(document).ready(function($) {
		$("#schedule .filter-container a").click(function(event) {
			var clickedCategory = $(this);

			// Do nothing if the same filter is clicked
			if (clickedCategory.hasClass('active-filter-header')) {
				return;
			}

			/** Headings */
			// Remove all highlights
			$(".filter-container a").each(function(index, el) {
				$(el).removeClass('active-filter-header');
			});
			// Add new highlight
			clickedCategory.addClass('active-filter-header');

			/** Content */
			var wantedFilter = clickedCategory.attr('id');
			var wantedRows = (".schedule-row." + wantedFilter);
			// Hide all items
			$(".schedule-row").each(function(index, el) {
				$(el).css('display', 'none');
			});
			// Show items for requested filter
			$(wantedRows).each(function(index, el) {
				$(el).css('display', 'block');
			});
		});
	});
})(jQuery);
