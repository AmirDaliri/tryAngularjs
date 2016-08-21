angular.module('myApp').controller('MainController',function($scope,$state,$location,authenticateService){
  $scope.tabs=[
    {heading:'home',route:'home',active:true,isVisible:'false'},
    {heading:'Login',route:'Login',active:false,isVisible:'false'},
    {heading:'Logout',route:'Logout',active:false,isVisible:'false'}
  ];
  $scope.tabSelected=function(route){
    $state.go(route);
  };
  $scope.showMenue=function(tab){
    if(authenticateService.isLogged()==true  && tab.heading=='Login')
      return false;
    else  if(authenticateService.isLogged()==false && tab.heading=='Logout')
      return false;
    else if (tab.heading=='home')
      return true;
    else
       return true;
  }
});
