angular.module('pack-web')
.factory('fbService', function($q, $window){
  'use strict';

  var self = this;

  (function(d){
    // load the Facebook javascript SDK
    var js,
    id = 'facebook-jssdk',
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);
  }(document));

  $window.fbAsyncInit = function() {
    FB.init({
      appId: '263160120521086',
      channelUrl: 'app/channel.html',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.3'
    });
  };

  function getUser(){
    var deferred = $q.defer();
    if(!self.user){
      FB.api('/me', function(response) {
        if (!response || response.error) {
          deferred.reject('An error occured:' + JSON.stringify(response.error));
        } else {
          self.user = response;
          deferred.resolve(response);
        }
      });
    }
    else {
      deferred.resolve(self.user);
    }
    return deferred.promise;
  }

  return {
    'getUser' : getUser
  };
});
