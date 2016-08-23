angular.module('myApp').controller("logoutController",function($scope,$state,$location,authenticateService,sessionService){
  $scope.logout=function(){
   // $state.go('home')
   authenticateService.logout();
    $location.path('home');
  }
});
