'use strict'

angular.module("go")
    .directive("go", function() {
        return {
            restrict: "A",
            link: function(scope, element, attr) {
                let clickAction = attr.click

                element.bind("click", function(event) {
                    event.stopImmediatePropagation()
                    event.preventDefault()
                
                    scope.$eval(clickAction)                    
                })
            }
        }
    })