/////////////////////////////////////
//
// Define App
//
/////////////////////////////////////
var ocad = angular.module('ocad', []);


/////////////////////////////////////
//
// Setup Routes
//
/////////////////////////////////////
ocad.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/partial1.html',   controller: 'SimpleController'}).
      when('/view2', {templateUrl: 'partials/partial1.html', controller: 'SimpleController2'}).
      otherwise({redirectTo: '/'});
}]);


/////////////////////////////////////
//
// Define Controllers
//
/////////////////////////////////////
var controllers = {};

//
// Controller 1
controllers.SimpleController = function($scope, $http) {

  $http({method: 'GET', url: 'https://api.github.com/users/benjamincharity'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      //console.log(data, status);
      $scope.foo = data;

    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(data, status);
    });

};

//
// Controller 2
controllers.SimpleController2 = function($scope, $http) {

  $http({method: 'GET', url: 'https://api.github.com/users/scottopherson'}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      //console.log(data, status);
      $scope.foo = data;

    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(data, status);
    });
};


ocad.controller(controllers);
























