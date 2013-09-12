/////////////////////////////////////
//
// Services
//
/////////////////////////////////////

//
// Handle API calls
ocad.factory( 'userData', function($http, $window) {

  var token = $window.localStorage.getItem('token');
  var user = $window.localStorage.getItem('user');

  return {

    // get a specific user's info
    overview: function() {
      return $http({method: 'GET', url: 'https://api.github.com/users/' + user +'?access_token=' + token}).
        then(function(response, status, headers, config) {
          return response.data;
        });
    },

    // get a specific user's info
    //organizations: function(user) {
      //return $http({method: 'GET', url: 'https://api.github.com/' + user + '/orgs'}).
        //then(function(response, status, headers, config) {
          //console.log(response.data);
          //return response.data;
        //});
    //}

    // get the starred repos
    starred: function() {
      return $http({method: 'GET', url: 'https://api.github.com/users/' + user + '/starred?access_token=' + token}).
        then(function(response, status, headers, config) {
          return response.data;
        });
    },

    // get the last push
    //lastPush: function(user) {
      //return $http({method: 'GET', url: 'https://api.github.com/users/' + user + '/events'}).
        //then(function(response, status, headers, config) {
          //return response.data;
        //});
    //}

  }

});


ocad.factory( 'auth', function($q, oauth, $rootScope, $http) {

  var auth = function() {
    var deferred = $q.defer();

    oauth.popup('github', function(error, result) {
      $rootScope.$apply(function() {
        var token = result.access_token;

        $http({method: 'GET', url: 'https://api.github.com/user?access_token=' + token}).then(function(response) {
          console.log(response);
          deferred.resolve({token: token, user: response.data});
        });
      });

    });

    return deferred.promise;
  };


  return {
    getAuth: auth
  };

});


ocad.factory( 'oauth', function($window) {

  return $window.OAuth;

});
