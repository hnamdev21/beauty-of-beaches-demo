const app = {
  init() {
    const homeLink = document.getElementById("home");
    const galleryLink = document.getElementById("gallery");
    const logo = document.getElementById("logo-link");

    //Wait render component
    setTimeout(() => {
      const viewBeachesBtn = document.getElementById("view-beaches-btn");

      viewBeachesBtn.addEventListener("click", (event) => {
        addEvent("gallery");
      });
    }, 500);

    homeLink.addEventListener("click", (event) => {
      addEvent("home");
    });
    logo.addEventListener("click", (event) => {
      addEvent("home");
    });

    galleryLink.addEventListener("click", (event) => {
      addEvent("gallery");
    });

    function addEvent(page) {
      if (page == "home") {
        setTimeout(() => {
          app.addListenerHomePage();
          app.fillIconHomePage();
        }, 500);

        return;
      }

      if (page == "gallery") {
        setTimeout(() => {
          app.addListenerGalleryPage();
          app.fillIconGalleryPage();
        }, 500);

        return;
      }
    }
  },

  checkItemInList(nameCard) {
    let isTrue = true;
    const favoriteItems = [...document.querySelectorAll(".favorite-beach")];

    if (favoriteItems.length == 0) {
      isTrue = true;

      return isTrue;
    } else {
      favoriteItems.map((item) => {
        const nameItem = item.querySelector(".favorite-beach__name").innerText;

        if (nameItem == nameCard) {
          isTrue = false;
        } else {
          isTrue = true;
        }
      });

      return isTrue;
    }
  },

  fillIconHomePage() {
    const favoriteBeaches = [...document.querySelectorAll(".favorite-beach")];
    const cards = [...document.querySelectorAll(".card")];

    favoriteBeaches.map((favoriteBeach) => {
      const nameFavoriteBeach = favoriteBeach.querySelector(
        ".favorite-beach__name"
      ).innerText;

      cards.map((card) => {
        const nameCard = card.querySelector(".beach__name").innerText;
        const heartIcon = card.querySelector(".heart-icon");

        if (nameCard == nameFavoriteBeach) {
          heartIcon.classList = "heart-icon fa-solid fa-heart";
        } else {
          heartIcon.classList = "heart-icon fa-regular fa-heart";
        }
      });
    });
  },

  fillIconGalleryPage() {
    const favoriteBeaches = [...document.querySelectorAll(".favorite-beach")];
    const cards = [...document.querySelectorAll(".beach-card")];

    favoriteBeaches.map((favoriteBeach) => {
      const nameFavoriteBeach = favoriteBeach.querySelector(
        ".favorite-beach__name"
      ).innerText;

      cards.map((card) => {
        const nameCard = card.querySelector(".beach__name").innerText;
        const heartIcon = card.querySelector(".heart-icon");

        if (nameCard == nameFavoriteBeach) {
          heartIcon.classList = "heart-icon fa-solid fa-heart";
        } else {
          heartIcon.classList = "heart-icon fa-regular fa-heart";
        }
      });
    });
  },

  addListenerHomePage() {
    const cards = [...document.querySelectorAll(".card")];

    cards.forEach((item) => {
      const heartIcon = item.querySelector(".heart-icon");

      heartIcon.addEventListener("click", changeIcon);

      function changeIcon(event) {
        if (event.target.classList == "heart-icon fa-regular fa-heart") {
          event.target.classList = `heart-icon fa-solid fa-heart`;

          addFavorite();
          countItem();
        } else {
          event.target.classList = `heart-icon fa-regular fa-heart`;

          const nameCard = item.querySelector(".beach__name").innerText;
          const favoriteBeaches = [
            ...document.querySelectorAll(".favorite-beach"),
          ];

          favoriteBeaches.map((favoriteBeach) => {
            const nameFavoriteBeach = favoriteBeach.querySelector(
              ".favorite-beach__name"
            ).innerText;

            if (nameCard == nameFavoriteBeach) {
              favoriteBeach.remove();
              countItem();
            }
          });
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
                <a href="/gallery/beach/2">
                    <img src="${srcItem}" alt="">
                </a>
            </div>
            <h5 class="favorite-beach__name">${nameItem}</h5>
            <button class="remove-beach">Remove</button>`;

        if (app.checkItemInList(nameItem)) {
          favoriteList.appendChild(favoriteItem);
          getRemoveBtn();
        }
      }

      function countItem() {
        const favoriteItems = [...document.querySelectorAll(".favorite-beach")];
        const numItem = favoriteItems.length;

        document.querySelector(".num-favorite").innerText = numItem;
      }

      function getRemoveBtn() {
        const removeBtn = [...document.querySelectorAll(".remove-beach")];

        removeBtn.forEach((item) => {
          item.addEventListener("click", removeBeach);

          function removeBeach() {
            const btn = item;
            const favoriteBeach = btn.parentElement;
            const nameFavoriteBeach = favoriteBeach.querySelector(
              ".favorite-beach__name"
            ).innerText;
            const cards = [...document.querySelectorAll(".card")];

            cards.map((card) => {
              const nameCard = card.querySelector(".beach__name").innerText;
              const heartIcon = card.querySelector(".heart-icon");

              if (nameCard == nameFavoriteBeach) {
                heartIcon.classList = "heart-icon fa-regular fa-heart";
              }
            });
            favoriteBeach.remove();
            countItem();
          }
        });
      }
    });

    const card = document.querySelector(".card");
    const wrapperLists = [...document.querySelectorAll(".list-section")];
    wrapperLists.forEach((item) => {
      const leftBtn = item.querySelector(".left-btn");
      const rightBtn = item.querySelector(".right-btn");
      const margin = 40;

      leftBtn.addEventListener("click", scrollLeft);
      rightBtn.addEventListener("click", scrollRight);

      function scrollLeft(event) {
        item.querySelector(".wrapper-list").scrollLeft -=
          card.offsetWidth + margin;
      }
      function scrollRight(event) {
        item.querySelector(".wrapper-list").scrollLeft +=
          card.offsetWidth + margin;
      }
    });
  },

  addListenerGalleryPage() {
    const beachCards = [...document.querySelectorAll(".beach-card")];

    beachCards.forEach((item) => {
      const heartIcon = item.querySelector(".heart-icon");

      heartIcon.addEventListener("click", changeIcon);

      function changeIcon(event) {
        if (event.target.classList == "heart-icon fa-regular fa-heart") {
          event.target.classList = `heart-icon fa-solid fa-heart`;

          addFavorite();
          countItem();
        } else {
          event.target.classList = `heart-icon fa-regular fa-heart`;

          const nameCard = item.querySelector(".beach__name").innerText;
          const favoriteBeaches = [
            ...document.querySelectorAll(".favorite-beach"),
          ];

          favoriteBeaches.map((favoriteBeach) => {
            const nameFavoriteBeach = favoriteBeach.querySelector(
              ".favorite-beach__name"
            ).innerText;

            if (nameCard == nameFavoriteBeach) {
              favoriteBeach.remove();
              countItem();
            }
          });
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

        if (app.checkItemInList(nameItem)) {
          favoriteList.appendChild(favoriteItem);
          getRemoveBtn();
        }
      }

      function countItem() {
        const favoriteItems = [...document.querySelectorAll(".favorite-beach")];
        const numItem = favoriteItems.length;

        document.querySelector(".num-favorite").innerText = numItem;
      }

      function getRemoveBtn() {
        const removeBtn = [...document.querySelectorAll(".remove-beach")];

        removeBtn.forEach((item) => {
          item.addEventListener("click", removeBeach);

          function removeBeach() {
            const btn = item;
            const favoriteBeach = btn.parentElement;
            const nameFavoriteBeach = favoriteBeach.querySelector(
              ".favorite-beach__name"
            ).innerText;
            const cards = [...document.querySelectorAll(".beach-card")];

            cards.map((card) => {
              const nameCard = card.querySelector(".beach__name").innerText;
              const heartIcon = card.querySelector(".heart-icon");

              if (nameCard == nameFavoriteBeach) {
                heartIcon.classList = "heart-icon fa-regular fa-heart";
              }
            });
            favoriteBeach.remove();
            countItem();
          }
        });
      }
    });
  },

  addListenerContactPage() {
    const idElements = ["fullName", "email", "feedback"]

    function checkRequire(inputEle, labelEle, spanEle, msg) {
      if (inputEle.value.trim() == "") {
        spanEle.innerText = msg;
        inputEle.classList.add("invalid");
        labelEle.classList.add("invalid");
      } else {
        spanEle.innerText = "";
        inputEle.classList.remove("invalid");
        labelEle.classList.remove("invalid");
      }
    }

    idElements.forEach(id => {
      const element = document.getElementById(`${id}`)
      const parentEle = element.parentElement
      const spanEle = parentEle.querySelector(".warning-msg")
      const labelEle = parentEle.querySelector("label")
      let temp = ""
      
      element.addEventListener("blur", event => {
        const valueInput = event.target.value;
        let msg = "";

        switch (id) {
          case "fullName":
            temp = "full name";
            break;
          default:
            temp = id;
        }
        msg = `Please enter your ${temp}`;

        checkRequire(element, labelEle, spanEle, msg)
      })

      element.addEventListener("keydown", event => {
        spanEle.innerText = ""
        element.classList.remove("invalid");
        labelEle.classList.remove("invalid");
      })
    })
  },

  checkValid(idEle, regexName, regexEmail) {
    const inputEle = document.getElementById(`${idEle}`)
    const parentEle = inputEle.parentElement
    const labelEle = parentEle.querySelector("label")
    const spanEle = parentEle.querySelector(".warning-msg")
    let msg = ""

    switch (idEle) {
      case "fullName":
        if (!regexName.test(inputEle.value)) {
          msg = "Invalid name"
        }
        return false

        break;

      case "email":
        if (!regexEmail.test(inputEle.value)) {
          msg = "Invalid email"
        }
        return false

        break;

      default:
        break;
    }

    return false
  },

  submitForm() {
    console.log(`22222222`)
    const idElements = ["fullName", "email", "feedback"]
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    const isValids = idElements.map(id => {
      app.checkValid(id, regexName, regexEmail);
    })

    console.log(isValids)

    // return isValid.forEach(checked => {
    //   if (checked == false) {
    //     return false;
    //   }

    //   return true;
    // })

    return false;
  },
};

document.addEventListener("DOMContentLoaded", app.init);
window.addEventListener("load", app.addListenerHomePage);
app.addListenerContactPage()