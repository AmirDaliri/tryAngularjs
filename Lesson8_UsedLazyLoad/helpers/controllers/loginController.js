angular.module('myApp').controller("loginController",function($scope,$state,$location,authenticateService,sessionService){
   $scope.login=function(){
    // $state.go('home')
    if($scope.emailModel=='geek' && $scope.passModel=='password'){
      //sessionService.set(emailModel);
      authenticateService.login($scope.emailModel);
      $location.path('home');
    }
    

   }
});
