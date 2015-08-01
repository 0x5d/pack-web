angular.module('pack-web')
.factory('userService', function($http){
  'use strict';

  function signUp(user){
    return $http.post('/api/v1/users', user);
  }

  return {
    'signUp': signUp
  };
});
