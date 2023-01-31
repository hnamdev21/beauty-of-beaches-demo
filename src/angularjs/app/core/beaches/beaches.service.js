'use strict'

angular.module("beaches")
    .factory("Beaches", function($resource) {
        const url = 'assets/data/beaches.json'

        return $resource(url, {}, {
            query: {
                method: "GET",
                params: {},
                isArray: true,
                cache: true
                // transformRespone
                // interceptor
            },
            
            get: {
                method: "GET",
                // params: {"id": @id},
                isArray: true,
                cache: true
            }
        })
    })