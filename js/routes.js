/////////////////////////////////////
//
// Setup Routes
//
/////////////////////////////////////

ocad.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/partial1.html',   controller: 'SimpleController'}).
      when('/view2', {templateUrl: 'partials/partial1.html', controller: 'SimpleController2'}).
      when('/thanks', {templateUrl: 'partials/thanks.html', controller: 'SimpleController'}).
      otherwise({redirectTo: '/'});
}]);
