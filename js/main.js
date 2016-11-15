//Creaction on the module 
//var TodoApp = angular.module('TodoApp', ['ngRoute']);
//Configutation on the ruts 
/** @ngInject */
//config.$inject = ['$routeProvider'];
/*TodoApp.config(["$routeProvider", function($routeProvider) {

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
});*/
angular.module('TodoApp', [])
.controller('mainController', function($scope){
 $scope.newTodo = '';
    $scope.todo = [];
    if(localStorage.getItem("todo")){
      var localTodoToJson = JSON.parse(localStorage.getItem("todo"));
      $scope.todo = localTodoToJson;
    }

    $scope.addTodo = function () {
      $scope.todo.push({ name: $scope.newTodo});
      var localTodo = JSON.stringify(angular.copy($scope.todo));
      localStorage.setItem("todo", localTodo);
      $scope.newTodo = '';
    }

    $scope.removeAllTodo = function(){
      $scope.todo = [];
      localStorage.setItem("todo", '');
    }

    $scope.removeItemTodo = function(index){
      $scope.todo.splice(index, 1);
      var localTodo = JSON.stringify(angular.copy($scope.todo));
      localStorage.setItem("todo", localTodo);
    }
  
}); 