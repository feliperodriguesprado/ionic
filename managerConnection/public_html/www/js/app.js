// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

statusConnection = undefined;

window.angular.module('app', ['ionic', 'ngCordova'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .controller('MyCtrl', ['$scope', '$rootScope', '$cordovaNetwork',
            function ($scope, $rootScope, $cordovaNetwork) {

                $scope.eventList = [];

                document.addEventListener("deviceready", function () {

                    statusConnection = $cordovaNetwork.getNetwork();
                    statusConnection = $cordovaNetwork.isOnline();
                    statusConnection = $cordovaNetwork.isOffline();

                    // listen for Online event
                    $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
                        statusConnection = networkState;
                    });

                    // listen for Offline event
                    $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
                        statusConnection = networkState;
                    });

                }, false);

                function getDateTime() {

                    var date, day, month, year, hours, minutes, seconds;

                    date = new Date();
                    
                    day = date.getDate();
                    if (day.toString().length === 1)
                        day = "0" + day;

                    month = date.getMonth() + 1;
                    if (month.toString().length === 1)
                        month = "0" + month;

                    year = date.getFullYear();
                    
                    hours = date.getHours();
                    if (hours.toString().length === 1)
                        hours = '0' + hours;

                    minutes = date.getMinutes();
                    if (minutes.toString().length === 1)
                        minutes = '0' + minutes;
                    
                    seconds = date.getSeconds();
                    if (seconds.toString().length === 1)
                        seconds = '0' + seconds;

                    return day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
                }

                $scope.showLog = function () {
                    $scope.eventList.push("> " + getDateTime() + " - " + statusConnection);
                };
                
                $scope.clearLog = function () {
                    $scope.eventList = [];
                };

            }]);
