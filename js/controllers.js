/////////////////////////////////////
//
// Define Controllers
//
/////////////////////////////////////

var controllers = {};

//
// Controller 1
controllers.SimpleController = function($scope, $http, userData) {
  // get the main user's info first
  // TODO: change to logged in user
  var username = 'benjamincharity';

  // get all the tour information
  userData.overview(username).then(function(user) {
    // assign the tour data
    $scope.user = user;
  });

  // get all the tour information
  userData.starred(username).then(function(starred) {
    // assign to our scope
    $scope.user.starred_repos = starred.length;
  });

  // get the latest push
  userData.lastPush(username).then(function(push) {

    // return the first item that is a push event
    function findByType(source, type) {
      return source.filter(function( obj ) {
        return obj.type === "PushEvent";
      })[ 0 ];
    }

    var latestPush = findByType(push, 'PushEvent');
    var latestPushDate = latestPush.created_at;
    var trimmedDate = latestPushDate.substring(0, latestPushDate.indexOf('T'));
    var splitDate = trimmedDate.split(/\s*\-\s*/g);
    var finalDate = splitDate[1] + ' - ' + splitDate[2] + ' - ' + splitDate[0];
    console.log(finalDate);


    // assign to our scope
    $scope.user.last_push = latestPushDate;
  });

};

//
// Assign controllers
ocad.controller(controllers);
