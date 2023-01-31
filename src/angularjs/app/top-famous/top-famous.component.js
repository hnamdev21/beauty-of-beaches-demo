'use strict'

angular.module("topFamous")
    .component("topFamous", {
        templateUrl: "/src/angularjs/templates/top-famous.html",
        controller: function(Beaches, $scope, $rootScope, $location) {
            Beaches.query(function(data) {
                $scope.beaches = data
                $scope.topFamous = []

                sortFamous($scope.beaches)
                renderTop($scope.beachSorted)
            })

            function sortFamous() {
                $scope.beachSorted = $scope.beaches.sort((a, b) => {
                    if(b.rate < a.rate) {
                        return -1
                    } else if(b.rate > a.rate) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }

            function renderTop() {
                for (let i = 0; i < 10 ; i++) {
                    $scope.topFamous.push($scope.beachSorted[i])
                }
            }

            $scope.goToThePath = function(beach) {
                $rootScope.$apply(function() {
                    $location.path("/gallery/beach/" + beach.id)
                })
            }
        }
    })