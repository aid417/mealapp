$(() => {
  ////////////////////////////////////////////
  //clear search results
  ////////////////////////////////////////////
  $("#clear").on("click", event => {
    event.preventDefault();
    $(".searchresults").empty();
  });
  // localStorage.clear();
  ////////////////////////////////////////////
  //clear a meal from the page
  ////////////////////////////////////////////
  // console.log(localStorage);
  $(".remove").on("click", event => {
    event.preventDefault();

    console.log("remove!");
    console.log(
      $(event.currentTarget)
        .siblings()
        .eq(1)
        .attr("id")
    );
    $(event.currentTarget).css("display", "none");
    const $targ = $(event.currentTarget).siblings();
    $targ
      .eq(1)
      .children()
      .remove();
    localStorage.removeItem(
      `${$(event.currentTarget)
        .siblings()
        .eq(1)
        .attr("id")}.ingredients`
    );
    localStorage.removeItem(
      `${$(event.currentTarget)
        .siblings()
        .eq(1)
        .attr("id")}`
    );

    console.log(localStorage);
    console.log($targ.eq(1).children());
  });
  ////////////////////////////////////////////
  //recreating div elements on the page
  ////////////////////////////////////////////
  const reCreate = (keysArray, valuesArray) => {
    console.log(keysArray[0]);
    console.log(valuesArray);
    keysArray = keysArray[0];
    valuesArray = valuesArray[0];
    // keysArray.shift();
    // valuesArray.shift();
    console.log(valuesArray);

    // keysArray = keysArray[0].split(",");
    for (i = 0; i <= keysArray.length; i++) {
      valuesArray[i] = valuesArray[i].split(",");
      console.log(valuesArray);
      const $image = $("<img>");
      $image.attr("src", `${valuesArray[i][1]}`);
      $image.attr("height", "50px");
      $image.attr("width", "50px");
      $image.addClass("resultimage");
      const $a = $("<a>");
      $a.attr("href", `${valuesArray[i][3]}`);
      $a.text(`${valuesArray[i][2]}`);
      $a.attr("target", "_blank");
      $a.addClass("recipeA");
      const $div = $("<div>");
      $div.text(valuesArray[i][0]);
      $div.addClass("recipesearch");
      $div.append($image);
      $div.append($a);
      $(`#${keysArray[i]}`)
        .siblings()
        .eq(1)
        .css("display", "block");
      $(`#${keysArray[i]}`).append($div);
    }
  };
  // localStorage.clear();
  ////////////////////////////////////////////
  //checking to see if there is anything in localstorage
  ////////////////////////////////////////////
  let storageArray = [];
  window.onload = function(event) {
    event.preventDefault();
    // console.log("connected");
    storageArray.push(localStorage);

    console.log(storageArray);
    let keysArray = [];
    let valuesArray = [];
    if (storageArray.length > 0) {
      keysArray.push(Object.keys(storageArray[0]));

      valuesArray.push(Object.values(storageArray[0]));
      reCreate(keysArray, valuesArray);
      console.log(keysArray);
      console.log(valuesArray);
    }
    // console.log(Object.keys(storageArray[0]));
    // console.log(Object.values(storageArray[0]));
  };

  ////////////////////////////////////////////
  //appends the ui element to the target where it is dropped
  ////////////////////////////////////////////
  let ingredientArray = [];
  // localStorage.clear();
  $(".dropdiv").on("drop", (event, ui) => {
    event.preventDefault();
    ///////////////////////////////////////////
    //adds ingredients to local storage and grocery page
    ///////////////////////////////////////////
    const ingredients = ui.draggable
      .children()
      .eq(2)
      .text();
    ingredientArray.push(ingredients);
    localStorage.setItem(
      `${$(event.currentTarget).attr("id")}.ingredients`,
      `${ingredients}`
    );
    console.log(localStorage);

    ///////////////////////////////////////////
    //appends search result to the page
    ////////////////////////////////////////////
    $(event.currentTarget)
      .siblings()
      .eq(1)
      .css("display", "block");
    $(event.currentTarget).append(ui.draggable);

    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");

    ///////////////////////////////////////////
    //pushing attributes into an array
    ////////////////////////////////////////////
    let reconstructArray = [];
    reconstructArray.push(ui.draggable.attr("id"));
    reconstructArray.push(
      $(event.currentTarget)
        .children()
        .children()
        .eq(0)
        .attr("src")
    );
    reconstructArray.push(
      $(event.currentTarget)
        .children()
        .children()
        .eq(1)
        .text()
    );
    reconstructArray.push(
      $(event.currentTarget)
        .children()
        .children()
        .eq(1)
        .attr("href")
    );

    localStorage.setItem(
      `${$(event.currentTarget).attr("id")}`,
      `${reconstructArray}`
    );
  });
  // console.log(localStorage);
  ////////////////////////////////////////////
  //makes the object draggable and target droppable
  ////////////////////////////////////////////
  $(function() {
    $(".draggable").draggable();
    $(".dropdiv").droppable();
  });

  ////////////////////////////////////////////
  //generates search results on page
  ////////////////////////////////////////////
  const handleData = data => {
    let dataArray = [];
    dataArray.push(data.hits);
    let recipeArray = dataArray[0];

    console.log(recipeArray);
    for (let i = 0; i < recipeArray.length; i++) {
      const $image = $("<img>");
      $image.attr("src", recipeArray[i].recipe.image);
      $image.attr("height", "50px");
      $image.attr("width", "50px");
      $image.addClass("resultimage");
      const $div2 = $("<div>");
      $div2.addClass("hidden");
      $div2.text(recipeArray[i].recipe.ingredientLines);

      const $a = $("<a>");
      $a.attr("href", recipeArray[i].recipe.shareAs);
      $a.text(recipeArray[i].recipe.source);
      $a.attr("target", "_blank");
      $a.addClass("recipeA");
      const $div = $("<div>");
      $div.addClass("recipesearch");
      $div.addClass("draggable");
      $div.text(recipeArray[i].recipe.label);
      $div.attr("id", `${recipeArray[i].recipe.label}`);
      $div.append($image);
      $div.append($a);
      $div.append($div2);
      $div.draggable();

      $(".searchresults").append($div);
    }
  };
  ////////////////////////////////////////////
  //Ajax call
  ////////////////////////////////////////////
  $("form").on("submit", event => {
    event.preventDefault();
    let $q = $("#input-box").val();
    console.log($q);
    console.log(
      `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
    );

    $.ajax({
      url: `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
    }).then(handleData);
    $(event.currentTarget).trigger("reset");
    $("#input-box").val("");
    console.log($("#input-box"));
  });
});
