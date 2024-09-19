console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let filledStars = 0;

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  // for (filledStars; counter < filledStars; counter++) {
  //   console.log(filledStars);

  //   const stars = document.createElement("img");
  //   stars.src = "assets/star-filled.svg";
  //   starContainer.appendChild(stars);
  // }

  // for (counter; counter < 6; counter++) {
  //   console.log(counter);

  //   const stars = document.createElement("img");
  //   stars.src = "assets/star-empty.svg";
  //   starContainer.appendChild(stars);
  // }

  // -------------------------------------------------------------------------

  for (counter = 1; counter < 6; counter++) {
    const stars = document.createElement("img");
    stars.dataset.value = counter;

    if (counter <= filledStars) {
      stars.src = "assets/star-filled.svg";
    } else {
      stars.src = "assets/star-empty.svg";
    }

    stars.addEventListener("click", function () {
      filledStars = this.dataset.value;
      renderStars();
      console.log("User selected " + this.dataset.value + " stars");
    });

    starContainer.appendChild(stars);
  }
  //--^-- your code here --^--
}

renderStars();
