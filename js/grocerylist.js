$(() => {
  console.log("connected!");
  $(".menu_icon").on("click", event => {
    event.preventDefault();
    // console.log($(event.currentTarget).siblings(0));
    $(event.currentTarget)
      .siblings(0)
      .toggle();
  });
  export let name = "alice";
  //import ingredients from my meals
  // $("form").on("submit", event => {
  //   event.preventDefault();
  //   const $div = $("<div>");
  //   $div.addClass("grocery inventory");
  //   const $listItem = $("#input-box").val();
  //   $div.text($listItem);
  //   $(".container").append($div);
  //   $(event.currentTarget).trigger("reset");
  // });
});
