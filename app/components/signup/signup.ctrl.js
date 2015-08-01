angular.module('pack-web')
.controller('SignupCtrl', function(authService){
  'use strict';

  var self = this;

  self.title = 'Create an account.';
  self.user = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };


  this.signUp = function(){
    if(self.user.pass !== self.user.passConfirmation) return;
    authService.signUp(self.user);
  };
});
