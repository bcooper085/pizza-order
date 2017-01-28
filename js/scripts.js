//Business Logic
var orderTotal = 0;

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
    $('.pizza-here').fadeIn(5000);
    $('.col-md-3').fadeIn(5000);
    var inputtedSize = $('input[name=pizzaSize]:checked').val();
    var newPizza = new Pizza(inputtedSize);
    $('input[name=pizzaToppings]:checked').each(function() {
      newPizza.pizzaToppings.push($(this).val());
    });
    orderTotal += newPizza.price();
    $('#output-order').append('<li>' + newPizza.order() + " " + "$" + newPizza.price() + '</li>');
    $('.order-total').text("$" + orderTotal);
    $("input[type=radio]").prop("checked", false);
    $("input[type=checkbox]").prop("checked", false);
  });
  $('#remove-button').click(function() {
    $('#output-order li:last').remove();
    $('.order-total').text(" ");
  });
});
