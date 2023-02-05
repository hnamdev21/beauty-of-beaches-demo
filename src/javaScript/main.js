const app = {
  addListenerHomePage() {
    console.log(`home page`);

    const cards = [...document.querySelectorAll(".card")];
    console.log(cards);
    cards.forEach((item) => {
      const heartIcon = item.querySelector(".heart-icon");

      heartIcon.addEventListener("click", changeIcon);

      function changeIcon(event) {
        if (event.target.classList == "heart-icon fa-regular fa-heart") {
          event.target.classList = `heart-icon fa-solid fa-heart`;

          addFavorite();
          checkItem();
        } else {
          event.target.classList = `heart-icon fa-regular fa-heart`;
        }
      }

      function addFavorite(event) {
        const srcItem = item.querySelector("img").src;
        const nameItem = item.querySelector(".beach__name").innerText;

        const favoriteList = document.querySelector(".favorite-beaches");
        const favoriteItem = document.createElement("div");
        favoriteItem.className = "favorite-beach flex-center";
        favoriteItem.innerHTML = `
            <div class="favorite-beach__img">
                <a href="">
                    <img src="${srcItem}" alt="">
                </a>
            </div>
            <h5 class="favorite-beach__name">${nameItem}</h5>
            <button class="remove-beach">Remove</button>`;
        favoriteList.appendChild(favoriteItem);

        getBtn();
      }

      function checkItem() {
        const favoriteItems = [...document.querySelectorAll(".favorite-beach")];
        const numItem = favoriteItems.length;

        document.querySelector(".num-favorite").innerText = numItem;
      }

      function getBtn() {
        const removeBtn = [...document.querySelectorAll(".remove-beach")];

        removeBtn.forEach((item) => {
          item.addEventListener("click", removeBeach);

          function removeBeach() {
            const btn = item;
            const favoriteBeach = btn.parentElement;
            favoriteBeach.remove();

            checkItem();
          }
        });
      }
    });
  },

  addListenerGalleryPage() {
    console.log(`gallery page`);

    const beachCards = [...document.querySelectorAll(".beach-card")];
    console.log(beachCards);

    beachCards.forEach((item) => {
      const heartIcon = item.querySelector(".heart-icon");

      heartIcon.addEventListener("click", changeIcon);

      function changeIcon(event) {
        if (event.target.classList == "heart-icon fa-regular fa-heart") {
          event.target.classList = `heart-icon fa-solid fa-heart`;

          addFavorite();
          checkItem();
        } else {
          event.target.classList = `heart-icon fa-regular fa-heart`;
        }
      }

      function addFavorite(event) {
        const srcItem = item.querySelector("img").src;
        const nameItem = item.querySelector(".beach__name").innerText;

        const favoriteList = document.querySelector(".favorite-beaches");
        const favoriteItem = document.createElement("div");
        favoriteItem.className = "favorite-beach flex-center";
        favoriteItem.innerHTML = `
            <div class="favorite-beach__img">
                <a href="">
                    <img src="${srcItem}" alt="">
                </a>
            </div>
            <h5 class="favorite-beach__name">${nameItem}</h5>
            <button class="remove-beach">Remove</button>`;
        favoriteList.appendChild(favoriteItem);

        getBtn();
      }

      function checkItem() {
        const favoriteItems = [...document.querySelectorAll(".favorite-beach")];
        const numItem = favoriteItems.length;

        document.querySelector(".num-favorite").innerText = numItem;
      }

      function getBtn() {
        const removeBtn = [...document.querySelectorAll(".remove-beach")];

        removeBtn.forEach((item) => {
          item.addEventListener("click", removeBeach);

          function removeBeach() {
            const btn = item;
            const favoriteBeach = btn.parentElement;
            favoriteBeach.remove();
          }
        });
      }
    });
  },
};

function init() {
  const homeLink = document.getElementById("home");
  const galleryLink = document.getElementById("gallery");
  const festivalsLink = document.getElementById("festivals");
  const aboutLink = document.getElementById("about");
  const contactLink = document.getElementById("contact");

  homeLink.addEventListener("click", (event) => {
    setTimeout(() => {
      app.addListenerHomePage();
    }, 500);
  });
  galleryLink.addEventListener("click", (event) => {
    setTimeout(() => {
      app.addListenerGalleryPage();
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", init);
