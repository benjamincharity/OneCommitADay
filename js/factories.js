/////////////////////////////////////
//
// Factories
//
/////////////////////////////////////

ocad.factory('userData', function($http) {
  var factory = {};
  var user = 'benjamincharity';

  factory.getUsers = function($http) {
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

  return factory;
});
