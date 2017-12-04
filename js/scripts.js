$(document).ready(function() {
  var items = [];
  // creting empty array
  $("#form").submit(function(event) {
    var userInput = $("input#item1").val();
    items.push(userInput);
    event.preventDefault();
    });
    // this is adding items into the array
  $("#button").click(function(event) {
    items.sort();
    var itemsUpper = items.map(function(item) {
      return item.toUpperCase();
    });
  //$("#list").text(itemsUpper);
    itemsUpper.forEach(function(itemsUppe) {
      $("#list").append("<li>" + itemsUppe + "</li>");
    });
  // sorts items , makees new array, makes upper case
  // creates the
  });
});
