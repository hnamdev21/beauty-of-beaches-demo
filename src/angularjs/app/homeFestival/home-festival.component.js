'use strict'

angular.module("homeFestival")
    .component("homeFestival", {
        templateUrl: "src/angularjs/templates/home-festival.html",
        controller: function(Festivals, $scope) {
            $scope.homeFes = []

            Festivals.query(function(data) {
                $scope.festivals = data
                pushFes(2, $scope.festivals)
            })

            function pushFes(num) {
                for(let i = 0; i < num; i++) {
                    $scope.homeFes.push($scope.festivals[i])
                }
            }
        }
    })