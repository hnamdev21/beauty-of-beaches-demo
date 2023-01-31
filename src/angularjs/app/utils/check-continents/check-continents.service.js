'use strict'

angular.module("checkContinents")
    .filter("checkContinents", function() {
        return function(items, input = "", continents = false, zone = false) {
            let filteredBeaches = []

            if (input != "") {
                items.map(item => {
                    if( item.name.toLowerCase().includes(input.toLowerCase()) ) {
                        filteredBeaches.push(item)
                    }
                })  
            }

            if (continents.oceania) {
                items.map(item => {
                    if( item.continents == "Oceania" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (continents.europe) {
                items.map(item => {
                    if( item.continents == "Europe" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (continents.africa) {
                items.map(item => {
                    if( item.continents == "Africa" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (continents.asia) {
                items.map(item => {
                    if( item.continents == "Asia" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.north) {
                items.map(item => {
                    if( item.zone == "North" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.western) {
                items.map(item => {
                    if( item.zone == "Western" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.southeast) {
                items.map(item => {
                    if( item.zone == "Southeast" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.east) {
                items.map(item => {
                    if( item.zone == "East" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.sernwern) {
                items.map(item => {
                    if( item.zone == "Southern-Western" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.caribbean) {
                items.map(item => {
                    if( item.zone == "Caribbean" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.southwestern) {
                items.map(item => {
                    if( item.zone == "Southwestern" ) {
                        filteredBeaches.push(item)
                    }
                })
            }

            if (zone.northwest) {
                items.map(item => {
                    if( item.zone == "North-West" ) {
                        filteredBeaches.push(item)
                    }
                })
            }            

            if (filteredBeaches.length > 0) {
                return filteredBeaches
            }

            return items
        }
    })