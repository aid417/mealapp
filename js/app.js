$(() => {
  console.log($(".menu"));
  $(".menu_icon").on("click", event => {
    event.preventDefault();
    // console.log($(event.currentTarget).siblings(0));
    $(event.currentTarget)
      .siblings(0)
      .toggle();
  });

  // const handleData = data => {
  //   console.log(data);
  // };

  // $.ajax({
  //   url:
  //     "https://api.edamam.com/search?q=chicken&app_id=2c181b41&app_key=21818244f9316dd109a80ac7815443f7"
  // }).then(handleData);

  // import { name, apple } from "./search";
  // let name = name;
  // let apple = apple;
  // console.log(name);
});
