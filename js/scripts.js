//Business Logic
function Pizza(size) {
  this.pizzaSize = size;
  this.pizzaToppings = [];
}
Pizza.prototype.price = function() {
  var price = 0;
  if (this.pizzaSize === "Small") {
    price += 10;
  } else if (this.pizzaSize === "Medium") {
    price += 13;
  } else {
    price += 15;
  }
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    price++;
  }
  return price;
}
Pizza.prototype.order = function() {
  return (this.pizzaSize + " " + this.pizzaToppings.join(', '));
}

//User Logic
$(function() {
  $('.order-form').submit(function() {
    event.preventDefault();
    var inputtedSize = $('input[name=pizzaSize]:checked').val();
    var newPizza = new Pizza(inputtedSize);
    $('input[name=pizzaToppings]:checked').each(function() {
      var inputtedToppings = $(this).val();
      newPizza.pizzaToppings.push(inputtedToppings);
      $("input[type=radio]").prop("checked", false);
      $("input[type=checkbox]").prop("checked", false);
    });
    var orderCost = newPizza.price();
    $('#output-order').append('<li>' + newPizza.order() + " " + orderCost + '</li>');
  });
});
