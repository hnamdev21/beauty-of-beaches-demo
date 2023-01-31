'use strict'

angular.module("beachDetail")
    .component("beachDetail", {
        templateUrl: "src/angularjs/templates/beach-detail.html",
        controller: function($scope, Beaches, $routeParams) {
            Beaches.query(function(beaches) {
                angular.forEach(beaches, beach => {
                    if($routeParams.id == beach.id) {
                        $scope.name = beach.name
                        $scope.location = beach.location
                        $scope.rate = beach.rate
                        $scope.views = beach.views
                        $scope.image1 = beach.image1
                        $scope.image2 = beach.image2
                        $scope.image3 = beach.image3
                        $scope.desc1 = beach.description
                        $scope.desc2 = beach.description2
                        $scope.desc3 = beach.description3
                        $scope.alt = beach.alt
                    }
                })
            })

            $scope.declare = function() {
                $scope.name = ""
                $scope.location = ""
                $scope.image1 = ""
                $scope.image2 = ""
                $scope.image3 = ""
                $scope.desc1 = ""
                $scope.desc2 = ""
                $scope.desc3 = ""
                $scope.alt = ""
            }
        }
    })