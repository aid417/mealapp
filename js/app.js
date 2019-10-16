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

  let currentImgIndex = 0;
  let highestIndex = $(".food-images").children().length - 1;

  $(".next").on("click", () => {
    $(".food-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");

    if (currentImgIndex < highestIndex) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    $(".food-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });
  $(".previous").on("click", () => {
    $(".food-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");

    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = highestIndex;
    }
    $(".food-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });
  const slideShow = () => {
    $(".food-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");

    if (currentImgIndex < highestIndex) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    $(".food-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  };

  const newPic = setInterval(slideShow, 5000);

  // const $stage = $("#stage");
  // console.log($stage.children());
  // let array = [];
  // array.push($stage.children());
  // console.log(array);
  // const fadeComplete = (e)=> {
  //     stage.appendChild(arr[0]);
  // };
  //   const arr = stage.getElementsByTagName("a");
  //   for(let i=0; i < arr.length; i++) {
  //     arr[i].addEventListener("animationend", fadeComplete, false)
  //   }

  // }
});
