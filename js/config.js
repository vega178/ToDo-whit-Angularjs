//Creaction on the module 
var TodoApp = angular.module('TodoApp', ['ngRoute']);

TodoApp.config(["$routeProvider", function($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/todoM.html',
            controller: 'mainController',
            controllerAs: 'todoM'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
