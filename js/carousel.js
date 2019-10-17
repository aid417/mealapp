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
