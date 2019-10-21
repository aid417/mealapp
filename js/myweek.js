$(() => {
  $("#clear").on("click", event => {
    event.preventDefault();
    $(".searchresults").empty();
  });
  $(".remove").on("click", event => {
    event.preventDefault();
    console.log("remove!");
    console.log($(event.currentTarget).parent());
  });
  $(".monday").on("drop", (event, ui) => {
    event.preventDefault();
    console.log("dropped!");
    const $button = $("<button>");
    $button.addClass("remove");
    $button.text("remove");

    $(event.currentTarget).append(ui.draggable);
    $(event.currentTarget).append($button);
    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");
  });
  $(".tuesday").on("drop", (event, ui) => {
    event.preventDefault();
    console.log("dropped!");
    const $button = $("<button>");
    $button.text("remove");
    $button.addClass("remove");

    $(event.currentTarget).append(ui.draggable);
    $(event.currentTarget).append($button);
    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");
  });
  $(".wednesday").on("drop", (event, ui) => {
    event.preventDefault();
    console.log("dropped!");
    const $button = $("<button>");
    $button.addClass("remove");
    $button.text("remove");

    $(event.currentTarget).append(ui.draggable);
    $(event.currentTarget).append($button);
    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");
  });
  $(".thursday").on("drop", (event, ui) => {
    event.preventDefault();
    console.log("dropped!");
    const $button = $("<button>");
    $button.addClass("remove");
    $button.text("remove");

    $(event.currentTarget).append(ui.draggable);
    $(event.currentTarget).append($button);
    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");
  });
  $(".friday").on("drop", (event, ui) => {
    event.preventDefault();
    console.log("dropped!");
    const $button = $("<button>");
    $button.addClass("remove");
    $button.text("remove");

    $(event.currentTarget).append(ui.draggable);
    $(event.currentTarget).append($button);
    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");
  });
  $(".saturday").on("drop", (event, ui) => {
    event.preventDefault();
    console.log("dropped!");
    const $button = $("<button>");
    $button.addClass("remove");
    $button.text("remove");

    $(event.currentTarget).append(ui.draggable);
    $(event.currentTarget).append($button);
    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");
  });
  $(".sunday").on("drop", (event, ui) => {
    event.preventDefault();
    console.log("dropped!");
    const $button = $("<button>");
    $button.addClass("remove");
    $button.text("remove");

    $(event.currentTarget).append(ui.draggable);
    $(event.currentTarget).append($button);
    ui.draggable.css("top", "0");
    ui.draggable.css("left", "0");
  });
  $(function() {
    $(".draggable").draggable();
    $(".monday").droppable();
    $(".tuesday").droppable();
    $(".wednesday").droppable();
    $(".thursday").droppable();
    $(".friday").droppable();
    $(".saturday").droppable();
    $(".sunday").droppable();
  });

  let dataArray = [];

  const handleData = data => {
    dataArray.push(data.hits);
    let recipeArray = dataArray[0];
    $(".recipes").attr("id", "white");
    console.log(recipeArray);
    for (let i = 0; i < recipeArray.length; i++) {
      console.log(recipeArray[i].recipe.label);
      const $image = $("<img>");
      $image.attr("src", recipeArray[i].recipe.image);
      $image.attr("height", "50px");
      $image.attr("width", "50px");
      $image.addClass("resultimage");
      const $div2 = $("<div>");
      $div2.addClass("hidden");
      $div2.text(recipeArray[i].recipe.ingredientLines);
      console.log($div2.text());
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
  };

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
