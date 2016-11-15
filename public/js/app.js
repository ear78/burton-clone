angular.module('myApp', ['ui.router', 'ngAnimate'])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html',
            })
            .state('mens', {
                url: '/mens',
                templateUrl: '../views/mens.html',
            })
            .state('womens', {
                url: '/womens',
                templateUrl: '../views/womens.html',
            })
            .state('kids', {
                url: '/kids',
                templateUrl: '../views/kids.html',
            })
            .state('bagsandluggage', {
                url: '/bagsandluggage',
                templateUrl: '../views/bagsandluggage.html',
            })
            .state('coalition', {
                url: '/coalition',
                templateUrl: '../views/coalition.html',
            });
            $urlRouterProvider.otherwise('/');
    });
