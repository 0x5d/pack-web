angular.module('pack-web', ['ui.router', 'ngMaterial'])
.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
});
