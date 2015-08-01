angular.module('pack-web')
.factory('authService', function($http, fbService, userService){
  'use strict';

  function signUp(user){
    return $http.post('/api/v1/users', user)
      .then(function(response){
        return response.data;
      });
  }

  function signUpWithFB(){
    fbService.getUser()
    .then(function(user){

      var body = {
        username: user.name,
        uid: user.id,
        email: 'generic@email.com'
      };
      userService.signUp(body)
      .then(function(data){
        console.warn(data);
      });
    }, function(error){
      console.log(error)
    });
  }

  return {
    'signUp': signUp,
    'signUpWithFB': signUpWithFB
  };
});
