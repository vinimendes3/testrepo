(function() {

    var app = angular.module('App', ['ionic', 'ngCordova', 'ngAnimate']);

    app.config(function($stateProvider, 
                        $urlRouterProvider, 
                        $ionicConfigProvider, 
                        $compileProvider) {

        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content|ms-appx|x-wmapp0):|data:image\/|img\//);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);

        $ionicConfigProvider.scrolling.jsScrolling(ionic.Platform.isIOS());

        $stateProvider

            .state('home', {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: 'HomeController'
            })

            .state('app', {
                url: '/app',
                abstract: true,
                controller: 'AppController',
                templateUrl: 'templates/menu.html'
            })

            .state('app.gallery', {
                url: "/gallery",
                cache: false,
                views: {
                    viewContent: {
                        templateUrl: "templates/gallery.html",
                        controller: 'GalleryController'
                    }
                }
            })

            .state('app.item', {
                url: "/item/{title}",
                params: {
                    color: null,
                    icon: null
                },
                cache: false,
                views: {
                    viewContent: {
                        templateUrl: "templates/item.html",
                        controller: 'ItemController'
                    }
                }
            });

        $urlRouterProvider.otherwise(function ($injector, $location) {
        
            var $state = $injector.get("$state");
            $state.go("home");
        });     

    });

    app.run(function($ionicPlatform) {

        $ionicPlatform.ready(function() {

            if(window.cordova && window.cordova.plugins.Keyboard) {

                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

        });
    });

}());