/////////////////////////////////////
//
// Services
//
/////////////////////////////////////

//
// Handle API calls
ocad.factory( 'userData', function($http) {

    return {

        // get a specific user's info
        overview: function(user) {
            return $http({method: 'GET', url: 'https://api.github.com/users/' + user}).
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
        starred: function(user) {
            return $http({method: 'GET', url: 'https://api.github.com/users/' + user + '/starred'}).
                then(function(response, status, headers, config) {
                    return response.data;
                });
        },

        // get the last push
        lastPush: function(user) {
            return $http({method: 'GET', url: 'https://api.github.com/users/' + user + '/events'}).
                then(function(response, status, headers, config) {
                    return response.data;
                });
        },

    }

});

