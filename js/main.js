//Creaction on the module 
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

//Configutation on the ruts 
/** @ngInject */
//config.$inject = ['$routeProvider'];
angularRoutingApp.config(function($routeProvider) {

    $routeProvider

        .when('/TodoM', {
            templateUrl: 'pages/TodoM.html',
            controller: 'mainController',
            controllerAs: 'TodoM'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angularRoutingApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});