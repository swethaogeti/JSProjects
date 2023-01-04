const allStars = document.querySelectorAll(".star");
const current_rating = document.querySelector(".current_rating");
allStars.forEach((star, i) => {
  star.onclick = function () {
    let current_star_rating = i + 1;
    allStars.forEach((star, j) => {
      if (current_star_rating >= j + 1) {
        current_rating.innerHTML = `${current_star_rating} of 5`;
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734";
      }
    });
  };
});
