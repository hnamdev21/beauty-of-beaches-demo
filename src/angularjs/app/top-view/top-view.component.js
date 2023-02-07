"use strict";

angular.module("topView").component("topView", {
  templateUrl: "src/angularjs/templates/top-view.html",
  controller: function (Beaches, $scope, $location, $rootScope) {
    Beaches.query(function (data) {
      $scope.beaches = data;
      $scope.topView = [];

      sortView($scope.beaches);
      renderTop($scope.beachSorted);
    });

    function sortView() {
      $scope.beachSorted = $scope.beaches.sort((a, b) => {
        if (b.view < a.view) {
          return -1;
        } else if (b.view > a.view) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    function renderTop() {
      for (let i = 0; i < 10; i++) {
        $scope.topView.push($scope.beachSorted[i]);
      }
    }

    $scope.goToThePath = function (beach) {
      $rootScope.$apply(function () {
        $location.path("/beauty-of-beaches-demo/gallery/beach/" + beach.id);
      });
    };
  },
});
