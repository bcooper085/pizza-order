//Business Logic
var price = 0;

function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.order = function() {
  return this.pizzaSize + " " + this.pizzaToppings;
}

var toppingCost = function(toppings) {
  for (var i = 0; i < toppings.length; i++) {
    price++;
  }
  return price;
}

//User Logic
$(function() {
  $('.order-form').submit(function() {
    event.preventDefault();
    var inputtedSize = $('input[name=pizzaSize]:checked').val();
    var inputtedToppings = $('input[name=pizzaToppings]:checked').val();
    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $('#output-order').text(newPizza.order());

    // $('form#order-form-toppings').removeAttr('checked');
    // $('input[name="pizzaToppings"]:checked').removeAttr('checked');


  });
});
