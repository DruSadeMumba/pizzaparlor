/* Business Logic */
function myPizza() {
	let pizza = document.forms[0];
	let txt = "";
	let i;

	for (i=0; i<pizza.length; i++){
		if(pizza[i].checked){
			txt = txt + pizza[i].value + " ";
		}
	}
	document.getElementById("results").innerHTML = txt ;
}


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
	$(".clickable1").click(function(){
			$("#four-cheese-img").toggle();
			$("#four-cheese-texts").toggle();
	});

	$(".clickable2").click(function(){
		$("#veggie-img").toggle();
		$("#veggie-texts").toggle();
	});

	$(".clickable3").click(function(){
		$("#pepperoni-img").toggle();
		$("#pepperoni-texts").toggle();
	});

	$(".clickable4").click(function(){
		$("#meat-lovers-img").toggle();
		$("#meat-lovers-texts").toggle();
	});

	$(".clickable5").click(function(){
		$("#margherita-img").toggle();
		$("#margherita-texts").toggle();
	});

	$(".clickable6").click(function(){
		$("#hawaiian-img").toggle();
		$("#hawaiian-texts").toggle();
	});

	$(".clickable7").click(function(){
		$("#the-works-img").toggle();
		$("#the-works-texts").toggle();
	});

	$(".clickable8").click(function(){
		$("#bbq-chicken-img").toggle();
		$("#bbq-chicken-texts").toggle();
	});

	$(".clickable9").click(function(){
		$("#chicken-mushroom-img").toggle();
		$("#chicken-mushroom-texts").toggle();
	});
});

$(document).ready(function(){
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

$(document).ready(function(){
	$("form#pizza").submit(function (event) {
		event.preventDefault();
	})
});
