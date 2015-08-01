angular.module('pack-web')
.config(function($stateProvider){
  $stateProvider.state('signup', {
    url : '/signup',
    templateUrl : 'components/signup/signup.html',
    controller : 'SignupCtrl as signup',
  });
});
