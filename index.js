let userRating;
let ratingsPara = document.querySelectorAll(".ratings button");
let submitButton = document.querySelector(".submit");
let ratingsParaArr = Array.from(ratingsPara);

ratingsParaArr.forEach((item) => {
  item.addEventListener("click", () => {
    userRating = Number(item.textContent);

    ratingsParaArr.forEach((item) => {
      item.classList.remove("clicked");
    });

    item.classList.add("clicked");
  });
});

submitButton.addEventListener("click", () => {
  if (!userRating) {
    alert("Please give rating first before submitting.");
    return;
  }
  let mainContainer = document.querySelector(".container");
  let thankYouContainer = document.querySelector(".container__thankyou");
  let ratingSpan = document.querySelector(".js-rating");

  ratingSpan.textContent = userRating;

  mainContainer.classList.add("hide");
  thankYouContainer.classList.remove("hide");
});
