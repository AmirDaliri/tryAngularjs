angular.module('myApp').controller('mainController',['$scope','$state','$location','authenticateService','sessionService',function($scope,$state,$location,authenticateService,sessionService){

  $scope.tabs=[
    {heading:'home',route:'home',active:true,isVisible:'false'},
    {heading:'login',route:'login',active:false,isVisible:'false'},
    {heading:'logout',route:'logout',active:false,isVisible:'false'}
  ];
  $scope.tabSelected=function(route){
    $state.go(route);
  };

  $scope.showMenue=function(tab){
    if(authenticateService.isLogged()==true  && tab.heading=='login')
      return false;
    else  if(authenticateService.isLogged()==false && tab.heading=='logout')
      return false;
    else if (tab.heading=='home')
      return true;
    else 
       return true;

      
  }
}]);
