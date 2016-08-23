angular.module('myApp').factory('authenticateService',function($rootScope,sessionService,$location){
  return{
    login:function(user){
      sessionService.set(user);
     // $location.path('home');
    },
    logout:function(){
      sessionService.destroy();
     // $location.path('home');
    },
    isLogged:function(){
      if(sessionService.get())
        return true;
      else 
        return false;
    }
  }
 
 });
