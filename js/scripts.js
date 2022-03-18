/* Business Logic */
function validate() {
	var pizzas = document.getElementsByClassName("pizza-select");
	var sizes = document.getElementsByClassName("size-select");
	var crusts = document.getElementsByClassName("crust-select");
	var quantity = document.getElementsById("numb");

	if (pizzas.value == "" || sizes.value == "" || crusts == "" || quantity == "");  {
		alert("Please fill in required fields");
	}
}


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
	$(".toppings .toppings-content").hide();
	$(".size-select").click(function() {
		var toppingSize = $(this).attr("data-radio");
		$(".toppings .toppings-content").hide();
		$("." + toppingSize).show();
	});
});
