/////////////////////////////////////
//
// Setup Routes
//
/////////////////////////////////////

ocad.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/login.html',   controller: 'login'}).
      when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'dashboard'}).
      when('/thanks', {templateUrl: 'partials/thanks.html', controller: 'SimpleController'}).
      otherwise({redirectTo: '/'});
}]);
