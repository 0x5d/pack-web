angular.module('pack-web')
.controller('LandingCtrl', function(authService){
  'use strict';

  var self = this;

  self.title = 'Welcome to Pack.';

  this.signUpWithFB = function(){
    authService.signUpWithFB();
  };
});
