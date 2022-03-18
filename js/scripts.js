/* Business Logic */



/* UI Logic */
$(document).ready(function(){
	$("form#pizza").submit(function (event) {
		event.preventDefault();
	})
	$(".crust .crust-content").hide();
	$(".size-select").click(function() {
		var pizzaSize = $(this).attr("data-radio");
		$(".crust .crust-content").hide();
		$("." + pizzaSize).show();
	});
});
