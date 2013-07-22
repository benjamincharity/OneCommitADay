/////////////////////////////////////
//
// Setup Routes
//
/////////////////////////////////////

ocad.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/dashboard.html',   controller: 'SimpleController'}).
      when('/view2', {templateUrl: 'partials/partial2.html', controller: 'SimpleController'}).
      when('/thanks', {templateUrl: 'partials/thanks.html', controller: 'SimpleController'}).
      otherwise({redirectTo: '/'});
}]);
