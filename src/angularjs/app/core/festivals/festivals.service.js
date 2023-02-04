'use strict'

angular.module("festivals")
    .factory("Festivals", function($resource) {
        const url = "assets/data/festivals.json"

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