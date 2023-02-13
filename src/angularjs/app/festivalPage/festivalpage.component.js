'use strict'

angular.module("festivalPage")
    .component("festivalPage", {
        templateUrl: "src/angularjs/templates/festival.html",
        controller: function(Festivals, $scope) {
            Festivals.query(function(data) {
                const festivals = data
                $scope.festivals = data
                $scope.tempData = []

                angular.forEach($scope.festivals, (festival) => {
                    const startingTime = new Date(festival.startingTime);
                    const timeNow = new Date();
                    const distance = startingTime - timeNow;

                    let day = 0;
                    let hour = 0;
                    let minute = 0;
                    let second = 0;

                    day = Math.floor(distance / (24 * 60 * 60 * 1000));
                    hour = Math.floor(distance / (60 * 60 * 1000)) % 24;
                    minute = Math.floor(distance / (60 * 1000)) % 60;
                    second = Math.floor(distance / 1000) % 60;

                    
                    setInterval(() => {
                        const timeNow = new Date();
                        const distance = startingTime - timeNow;

                        day = Math.floor(distance / (24 * 60 * 60 * 1000));
                        hour = Math.floor(distance / (60 * 60 * 1000)) % 24;
                        minute = Math.floor(distance / (60 * 1000)) % 60;
                        second = Math.floor(distance / 1000) % 60;
                        
                        festival.day = day;
                        festival.hour = hour;
                        festival.minute = minute;
                        festival.second = second;

                        $scope.tempData.push(festival)
                        $scope.festivals = $scope.tempData;
                        $scope.tempData = []
                        
                    },1000)
    
                    festival.day = day;
                    festival.hour = hour;
                    festival.minute = minute;
                    festival.second = second;
                    
                    $scope.tempData.push(festival)
                });
            })
        } 
    })