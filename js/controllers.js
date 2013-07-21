/////////////////////////////////////
//
// Define Controllers
//
/////////////////////////////////////

var controllers = {};

//
// Controller 1
controllers.SimpleController = function($scope, $http) {
  var user = 'benjamincharity';

  $http({method: 'GET', url: 'https://api.github.com/users/' + user}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      //console.log(data, status);
      $scope.user = data;

    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(data, status);
    });

  //$scope.changeUser = function(  ) {
    ////user = newUser.name;
    //console.log(user);
    //console.log(newUser.name);
  //};

};

//
// Controller 2
controllers.SimpleController2 = function($scope, $http) {
  var user = 'scottopherson';

  $http({method: 'GET', url: 'https://api.github.com/users/' + user}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      //console.log(data, status);
      $scope.user = data;

    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(data, status);
    });
};

//
// Assign controllers
ocad.controller(controllers);
