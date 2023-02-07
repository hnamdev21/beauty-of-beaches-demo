"use strict";

angular.module("galleryPage").component("galleryPage", {
  templateUrl: "src/angularjs/templates/gallery.html",
  controller: function (Beaches, $scope, $location, $rootScope) {
    const beachesPerPage = 15;
    let totalPages = 0;
    let currentPage = 1;
    let startIndex = 0;
    let endIndex = beachesPerPage;
    $scope.subBeaches = [];
    $scope.arrayPages = [];

    function addEvent() {
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
          const favoriteItems = [
            ...document.querySelectorAll(".favorite-beach"),
          ];
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
    }

    function fillIcon() {
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
    }

    $scope.changePagination = function (chocie) {
      currentPage = chocie;

      const beaches = $scope.subBeaches;

      updateStartEnd(currentPage);
      renderBeaches(beaches, startIndex, endIndex);
      addActive();
    };

    Beaches.query(function (data) {
      $scope.beaches = data;
      $scope.beaches.map((beach) => $scope.subBeaches.push(beach));
      totalPages = Math.ceil($scope.subBeaches.length / beachesPerPage);

      for (let i = 1; i <= totalPages; i++) {
        $scope.arrayPages.push(i);
      }

      renderBeaches($scope.beaches, startIndex, endIndex);
    });

    function updateStartEnd(currentPage) {
      startIndex = (currentPage - 1) * beachesPerPage;
      endIndex = currentPage * beachesPerPage;
    }

    function addActive() {
      const liElements = [...document.querySelectorAll(".pagination li")];

      liElements.forEach((liElement, index) => {
        if (index + 1 == currentPage) {
          liElement.classList.add("active");
        } else {
          liElement.classList.remove("active");
        }
      });

      setTimeout(() => {
        addEvent();
        fillIcon();
      }, 500);
    }

    function renderBeaches(beaches, start, end) {
      $scope.beaches = beaches.slice(start, end);
    }

    $scope.nextPagination = function () {
      currentPage++;

      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      const beaches = $scope.subBeaches;

      updateStartEnd(currentPage);
      renderBeaches(beaches, startIndex, endIndex);
      addActive();
    };

    $scope.prevPagination = function () {
      currentPage--;

      if (currentPage < 1) {
        currentPage = 1;
      }

      const beaches = $scope.subBeaches;

      updateStartEnd(currentPage);
      renderBeaches(beaches, startIndex, endIndex);
      addActive();
    };

    $scope.goToThePath = function (beach) {
      $rootScope.$apply(function () {
        $location.path("/beauty-of-beaches-demo/gallery/beach/" + beach.id);
      });
    };

    window.addEventListener("popstate", addActive);
  },
});
