'use strict'

angular.module("app")
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            // requireBase: false
        })

        $routeProvider
            .when("/", {
                template: "<home-page></home-page>" 
            })
            .when("/beauty-of-beaches-demo/contact", {
                template: "<contact-page></contact-page>"
            })
            .when("/beauty-of-beaches-demo/about", {
                template: "<about-page></about-page>"
            })
            .when("/beauty-of-beaches-demo/gallery", {
                template: "<gallery-page></gallery-page>"
            })
            .when("/beauty-of-beaches-demo/gallery/beach/:id", {
                template: "<beach-detail></beach-detail>"
            })
            .when("/beauty-of-beaches-demo/festivals", {
                template: "<festival-page></festival-page>"
            })
    })