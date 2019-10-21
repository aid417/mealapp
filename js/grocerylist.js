$(() => {
  //clears grocery list and localstorage
  $("#clearbutton").on("click", event => {
    event.preventDefault();
    $("#clearbutton").css("display", "none");
    localStorage.clear();
    $(".ingredients").empty();
    console.log(localStorage);
  });
  //imports ingredients from my week on window load and automatically appends them into a grocery list
  window.onload = function(event) {
    event.preventDefault();
    console.log("loaded");
    $(".ingredients").empty();
    let groceryList = [];
    groceryList.push(localStorage.getItem("ingredients"));
    groceryList = groceryList[0].split(",");
    console.log(groceryList);
    for (let i = 0; i < groceryList.length; i++) {
      const $div = $("<div>");
      $div.addClass("groceryDiv");
      $div.text(groceryList[i]);
      $(".ingredients").append($div);
    }
    $("#clearbutton").css("display", "block");
    $(".groceryDiv").on("click", event => {
      event.preventDefault();
      console.log(event.currentTarget);
      $(event.currentTarget).toggleClass("lineThrough");
    });
  };
});
