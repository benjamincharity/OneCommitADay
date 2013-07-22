/////////////////////////////////////
//
// Define Controllers
//
/////////////////////////////////////

var controllers = {};

//
// Controller 1
controllers.SimpleController = function($scope, $http) {
  // get the main user's info first
  $http({method: 'GET', url: 'https://api.github.com/users/benjamincharity'}).
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

  // get another user's data upon entry
  $scope.loadData = function() {
    $http({method: 'GET', url: 'https://api.github.com/users/' + $scope.typedName}).
      success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        //console.log(data, status);
        $scope.externalUser = data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(data, status);
      });
  }
};

//
// Assign controllers
ocad.controller(controllers);
