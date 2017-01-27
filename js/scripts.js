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
  return (this.pizzaSize + " " + this.pizzaToppings);
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
    });

    var orderCost = newPizza.price();

    $('#output-order').text(newPizza.order() + orderCost);

    // $('form#order-form-toppings').removeAttr('checked');
    // $('input[name="pizzaToppings"]:checked').removeAttr('checked');


  });
});
