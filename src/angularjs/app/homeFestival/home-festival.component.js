'use strict'

angular.module("homeFestival")
    .component("homeFestival", {
        templateUrl: "src/angularjs/templates/home-festival.html",
        controller: function(Festivals, $scope) {
            $scope.homeFes = []
            
            Festivals.query(function(data) {
                $scope.festivals = data
                for (let i = 0; i < 2; i++) {
                    const startingTime = new Date(festivals[i].startingTime);
                    const timeNow = new Date();
                    const distance = startingTime - timeNow;

                    const month = Math.floor(
                      distance / (30 * 24 * 60 * 60 * 1000)
                    );
                    const day = Math.floor(distance / (24 * 60 * 60 * 1000));
                    const hour = Math.floor(distance / (60 * 60 * 1000)) % 24;
                    const minute = Math.floor(distance / (60 * 1000)) % 60;
                    const second = Math.floor(distance / 1000) % 60;

                    $scope.festivals[i].month = month;
                    $scope.festivals[i].day = day;
                    $scope.festivals[i].hour = hour;
                    $scope.festivals[i].minute = minute;
                    $scope.festivals[i].second = second;
                }

                // console.log($scope.festivals)

                pushFes(2, $scope.festivals);
            })

            function pushFes(num, festivals) {
                for(let i = 0; i < num; i++) {
                    // Countdown
                    const startingTime = new Date(festivals[i].startingTime)
                    const timeNow = new Date();
                    const distance = startingTime - timeNow;

                    let month = Math.floor(distance / (30 * 24 * 60 * 60 * 1000));
                    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
                    let hour = Math.floor(distance / (60 * 60 * 1000)) % 24;
                    let minute = Math.floor(distance / (60 * 1000)) % 60;
                    let second = Math.floor(distance / 1000) % 60;

                    festivals[i].month = month;
                    festivals[i].day = day;
                    festivals[i].hour = hour;
                    festivals[i].minute = minute;
                    festivals[i].second = second;
                    
                    setInterval(() => {
                        const timeNow = new Date();
                        const distance = startingTime - timeNow;

                        month = Math.floor(distance / (30 * 24 * 60 * 60 * 1000));
                        day = Math.floor(distance / (24 * 60 * 60 * 1000));
                        hour = Math.floor(distance / (60 * 60 * 1000)) % 24;
                        minute = Math.floor(distance / (60 * 1000)) % 60;
                        second = Math.floor(distance / 1000) % 60;

                        $scope.homeFes[i].month = month;
                        $scope.homeFes[i].day = day;
                        $scope.homeFes[i].hour = hour;
                        $scope.homeFes[i].minute = minute;
                        $scope.homeFes[i].second = second;

                        // console.log($scope.homeFes)
                        // console.log(angular.isNumber($scope.homeFes[i].month));
                    }, 1000)

                    $scope.homeFes.push(festivals[i]);
                }
            }
        }
    })