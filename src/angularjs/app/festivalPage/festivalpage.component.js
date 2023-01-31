'use strict'

angular.module("festivalPage")
    .component("festivalPage", {
        templateUrl: "src/angularjs/templates/festival.html",
        controller: function(Festivals, $scope) {
            Festivals.query(function(data) {
                $scope.festivals = data
            })
        }
    })