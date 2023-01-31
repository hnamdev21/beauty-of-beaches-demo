'use strict'

angular.module("feedbacks")
    .factory("Feedbacks", function($resource) {
        const url = "/assets/data/feedbacks.json"

        return $resource(url, {}, {
            query: {
                method: "GET",
                params: {},
                isArray: true,
                cache: true,
            },

            get: {
                method: "GET",
                isArray: true,
                cache: true,
            }
        })
    })