$(() => {
  $("#clear").on("click", event => {
    event.preventDefault();
    $(".recipes").empty();
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
      $a.addClass("recipeA");
      const $div = $("<div>");
      $div.addClass("recipesearch");

      $div.text(recipeArray[i].recipe.label);
      $div.append($image);
      $div.append($a);

      $(".recipes").append($div);
    }
  };
  // console.log(localStorage);
  // localStorage.setItem("key", "value");
  $("form").on("submit", event => {
    event.preventDefault();
    const $q = $("#input-box").val();

    // const $mealType = $("#meal-box").val();
    // console.log($mealType);

    // console.log($q);
    console.log(
      `https://api.edamam.com/search?q=eggs&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
    );
    $(event.currentTarget).trigger("reset");
    $.ajax({
      url: `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
    }).then(handleData);
  });
});
// url: `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7&mealType=${$mealType}`
