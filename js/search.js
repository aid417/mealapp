$(() => {
  $(".menu_icon").on("click", event => {
    event.preventDefault();
    // console.log($(event.currentTarget).siblings(0));
    $(event.currentTarget)
      .siblings(0)
      .toggle();
  });
  let dataArray = [];
  const handleData = data => {
    dataArray.push(data.hits);
    let recipeArray = dataArray[0];
    $(".recipes").attr("id", "white");
    for (let i = 0; i < recipeArray.length; i++) {
      console.log(recipeArray[i].recipe.label);
      const $image = $("<img>");
      $image.attr("src", recipeArray[i].recipe.image);
      $image.attr("height", "50px");
      $image.attr("width", "50px");
      $image.addClass("resultimage");
      const $a = $("<a>");
      $a.attr("href", recipeArray[i].recipe.shareAs);
      $a.text(recipeArray[i].recipe.source);
      $a.attr("target", "_blank");
      const $div = $("<div>");
      $div.addClass("recipesearch");

      $div.text(recipeArray[i].recipe.label);
      $div.append($image);
      $div.append($a);
      // console.log($div);
      $(".recipes").append($div);
    }

    // $div.text(dataArray[i].recipe.label);
    // $(".container").append($div);

    // console.log(data.hits);
    console.log(dataArray);
  };
  $("form").on("submit", event => {
    event.preventDefault();
    const $q = $("#input-box").val();
    $(event.currentTarget).trigger("reset");
    const $mealType = $("#meal-box").val();
    $(event.currentTarget).trigger("reset");
    console.log($q);
    console.log(
      `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7&mealType=${$mealType}`
    );
    $.ajax({
      url: `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
    }).then(handleData);
  });

  // $.ajax({
  //     url: `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
  //   }).then(handleData);
});

// {q: "eggs", from: 0, to: 10, params: {…}, more: true, …}count: 340146from: 0hits: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]more: trueparams: {sane: Array(0), q: Array(1), app_key: Array(1), app_id: Array(1)}q: "eggs"to: 10__proto__: Object
