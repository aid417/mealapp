$(() => {
  ////////////////////////////////////////////////////
  //clears grocery list and localstorage
  ////////////////////////////////////////////////////
  $("#clearbutton").on("click", event => {
    event.preventDefault();
    $("#clearbutton").css("display", "none");
    localStorage.clear();
    $(".ingredients").empty();
    console.log(localStorage);
  });

  /////////////////////////////////////////////////////
  //making the grocery list
  /////////////////////////////////////////////////////
  const pageList = array => {
    console.log(array);
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
      const $div = $("<div>");
      $div.addClass("groceryDiv");
      $div.text(`${array[i]}`);
      console.log($div);
      $(".ingredients").append($div);
    }
    $(".groceryDiv").on("click", event => {
      event.preventDefault();
      console.log(event.currentTarget);
      $(event.currentTarget).toggleClass("lineThrough");
    });
    $("#clearbutton").css("display", "block");
  };
  /////////////////////////////////////////////////////
  //filtering by ingredients
  /////////////////////////////////////////////////////

  const generate = () => {
    console.log("generating list");
    let groceryList = [];

    const lsKey = Object.keys(localStorage);
    const lsValue = Object.values(localStorage);
    console.log(lsKey);
    for (let i = 0; i < lsKey.length; i++) {
      if (lsKey[i].includes("ingredients")) {
        groceryList.push(lsValue[i]);
      } else {
        console.log("nope");
      }
    }
    console.log(groceryList);
    for (i = 0; i < groceryList.length; i++) {
      groceryList[i] = groceryList[i].split(",");
      console.log(groceryList);
      pageList(groceryList[i]);
    }
  };
  /////////////////////////////////////////////////////
  //imports ingredients from my week on window load and sends them to a function to filter them
  ////////////////////////////////////////////////////

  window.onload = function(event) {
    event.preventDefault();
    // console.log(localStorage);
    // console.log("loaded");
    $(".ingredients").empty();
    console.log(localStorage.length);
    if (localStorage.length > 0) {
      generate();
    } else {
      console.log("nothing in local storage");
    }
  };
});
