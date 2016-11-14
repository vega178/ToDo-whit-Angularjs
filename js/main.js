//Creaction on the module 
var TodoApp = angular.module('TodoApp', ['ngRoute']);
//Configutation on the ruts 
/** @ngInject */
//config.$inject = ['$routeProvider'];
TodoApp.config(["$routeProvider", function($routeProvider) {

    $routeProviders

        .when('/', {
            templateUrl: 'pages/TodoM.html',
            controller: 'mainController',
            controllerAs: 'TodoM'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

TodoApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});