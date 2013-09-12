/////////////////////////////////////
//
// Define Controllers
//
/////////////////////////////////////

var controllers = {};


//
// Controller 1
controllers.login = function($scope, $location, $window, userData, auth) {
  console.log('login controller');

  // check for logged in user
  if( $window.localStorage.getItem('token') ) {

    $location.url("/dashboard");

  }

  $scope.logIn = function() {
    console.log('log in');

    auth.getAuth().then(function(result) {
      console.log(result);

      $window.localStorage.setItem('token', result.token);
      $window.localStorage.setItem('user', result.user.login);

      $location.url("/dashboard");
    });

  }

};


//
// Controller 1
controllers.dashboard = function($scope, $http, userData) {
  console.log('dashboard controller');

  // get the main user's info first



  //// get all the tour information
  userData.starred().then(function(starred) {
    // assign to our scope
    $scope.starred_repos = starred.length;
    console.log($scope.starred_repos);
  });

  //// get the latest push
  //userData.lastPush(username).then(function(push) {

    //// return the first item that is a push event
    //function findByType(source, type) {
      //return source.filter(function( obj ) {
        //return obj.type === "PushEvent";
      //})[ 0 ];
    //}

    //var latestPush = findByType(push, 'PushEvent');
    //var latestPushDate = latestPush.created_at;
    //var trimmedDate = latestPushDate.substring(0, latestPushDate.indexOf('T'));
    //var splitDate = trimmedDate.split(/\s*\-\s*/g);
    //var finalDate = splitDate[1] + ' - ' + splitDate[2] + ' - ' + splitDate[0];
    //console.log(finalDate);


    //// assign to our scope
    //$scope.user.last_push = latestPushDate;
  //});

};


//
// Assign controllers
ocad.controller(controllers);
