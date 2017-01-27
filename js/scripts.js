//Business Logic
var price = 0;

function Pizza(size,toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.Order = function() {
  return this.pizzaSize + " " + this.pizzaToppings;
}

//User Logic
$(function() {

});
