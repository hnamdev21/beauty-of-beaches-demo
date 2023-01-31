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
            .when("/contact", {
                template: "<contact-page></contact-page>"
            })
            .when("/about", {
                template: "<about-page></about-page>"
            })
            .when("/gallery", {
                template: "<gallery-page></gallery-page>"
            })
            .when("/gallery/beach/:id", {
                template: "<beach-detail></beach-detail>"
            })
            .when("/festivals", {
                template: "<festival-page></festival-page>"
            })
    })