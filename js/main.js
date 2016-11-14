//Creaction on the module 
angular.module('TodoApp', ['ngRoute'])
    //Configutation on the ruts 
    /** @ngInject */
    //config.$inject = ['$routeProvider'];
    .config(['$routeProvider',
        function($routeProvider) {

            $routeProvider

                .when('/pages/TodoM', {
                    templateUrl: 'pages/TodoM.html',
                    controller: 'mainController',
                    controllerAs: 'TodoM'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);

TodoApp.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo!';
});