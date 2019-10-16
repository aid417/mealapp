$(() => {
  $(".menu_icon").on("click", event => {
    event.preventDefault();
    // console.log($(event.currentTarget).siblings(0));
    $(event.currentTarget)
      .siblings(0)
      .toggle();
  });
});
