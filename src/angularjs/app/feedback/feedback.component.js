'use strict'

angular.module("feedback")
    .component("feedback", {
        templateUrl: "src/angularjs/templates/feedback.html",
        controller: function(Feedbacks, $scope) {
            Feedbacks.query(function(data) {
                $scope.feedbacks = data
            })
        }
    })