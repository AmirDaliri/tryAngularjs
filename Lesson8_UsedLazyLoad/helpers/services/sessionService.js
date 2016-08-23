angular.module('myApp').factory('sessionService',function($rootScope){
  var currentUser;
  return{
    set:function(user){return currentUser=user;},
    get:function(){return currentUser;},
    destroy:function(){return currentUser=null;}
  };

});
