$(() => {
  $(".menu_icon").on("click", event => {
    event.preventDefault();
    // console.log($(event.currentTarget).siblings(0));
    $(event.currentTarget)
      .siblings(0)
      .toggle();
  });
  const handleData = data => {
    console.log(data);
  };
  $("form").on("submit", event => {
    event.preventDefault();
    const $q = $("#input-box").val();
    console.log($q);
    console.log(
      `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
    );
    $.ajax({
      url: `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
    }).then(handleData);
    $(event.currentTarget).trigger("reset");
  });

  // $.ajax({
  //     url: `https://api.edamam.com/search?q=${$q}&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7`
  //   }).then(handleData);
});
