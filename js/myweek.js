$(() => {
  //clear search results
  $("#clear").on("click", event => {
    event.preventDefault();
    $(".searchresults").empty();
  });
  //clear a meal from the page
  $(".remove").on("click", event => {
    event.preventDefault();

    console.log("remove!");
    $(event.currentTarget).css("display", "none");
    const $targ = $(event.currentTarget).siblings();
    $targ
      .eq(1)
      .children()
      .remove();

    console.log($targ.eq(1).children());
  });

  // window.onload = function(event) {
  //   event.preventDefault();
  //   console.log("onload working!");
  //   console.log(localStorage);
  //   console.log(localStorage.array);
  // };
  // localStorage.clear();
  let idArray = [];

  //appends the ui element to the target where it is dropped
  $(".dropdiv").on("drop", (event, ui) => {
    event.preventDefault();

    // console.log(ui.draggable.html());

    $(event.currentTarget)
      .siblings()
      .eq(1)
      .css("display", "block");
    $(event.currentTarget).append(ui.draggable);
    console.log($(event.currentTarget).attr("id"));

    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");

    const pageLayout = new Object();
    pageLayout.identity = `${$(event.currentTarget).attr("id")}
    `;
    pageLayout.content = `${ui.draggable.html()}`;
    console.log(pageLayout);
    idArray.push(pageLayout);
    console.log(idArray[0].content);
    console.log(idArray);
    localStorage.setItem(`array`, `${idArray}`);
    console.log(localStorage);
  });

  //makes the object draggable and target droppable
  $(function() {
    $(".draggable").draggable();
    $(".dropdiv").droppable();
  });
  //adds ingredients of item to local storage
  // localStorage.clear();

  //generates search results on page

  const handleData = data => {
    let dataArray = [];
    dataArray.push(data.hits);
    let recipeArray = dataArray[0];
    // $(".recipes").attr("id", "white");
    console.log(recipeArray);
    for (let i = 0; i < recipeArray.length; i++) {
      // console.log(recipeArray[i].recipe.label);
      const $image = $("<img>");
      $image.attr("src", recipeArray[i].recipe.image);
      $image.attr("height", "50px");
      $image.attr("width", "50px");
      $image.addClass("resultimage");
      const $div2 = $("<div>");
      $div2.addClass("hidden");
      $div2.text(recipeArray[i].recipe.ingredientLines);
      // console.log($div2.text());
      const $a = $("<a>");
      $a.attr("href", recipeArray[i].recipe.shareAs);
      $a.text(recipeArray[i].recipe.source);
      $a.attr("target", "_blank");
      $a.addClass("recipeA");
      const $div = $("<div>");
      $div.addClass("recipesearch");
      $div.addClass("draggable");

      const $button = $("<button>");
      $button.text("Add Ingredients");
      $button.addClass("Add");
      $div.text(recipeArray[i].recipe.label);
      $div.append($image);
      $div.append($a);
      $div.append($div2);
      $div.append($button);
      $div.draggable();

      $(".searchresults").append($div);
    }
    let ingredientArray = [];
    $(".Add").on("click", event => {
      event.preventDefault();

      const ingredients = $(event.currentTarget)
        .siblings()
        .eq(2)
        .text();
      ingredientArray.push(ingredients);
      console.log(ingredients);
      localStorage.setItem("ingredients", `${ingredientArray}`);

      console.log(localStorage);
    });
  };

  //Ajax call
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
