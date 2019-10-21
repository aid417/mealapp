$(() => {
  console.log("connected!");
  $(".menu_icon").on("click", event => {
    event.preventDefault();
    // console.log($(event.currentTarget).siblings(0));
    $(event.currentTarget)
      .siblings(0)
      .toggle();
  });
  $("#clearbutton").on("click", event => {
    event.preventDefault();
    $("#clearbutton").css("display", "none");
    localStorage.clear();
    $(".ingredients").empty();
    console.log(localStorage);
  });
  //import ingredients from my week
  $(".generate").on("click", event => {
    event.preventDefault();
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
  });
  console.log(localStorage);
});
