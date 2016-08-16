angular.module("myApp").controller("cnotrollerB",function($scope,$stateParams){
  $scope.MyhText=$stateParams.myParentText;
  app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/b");
    $stateProvider.state('b',{
      url: "/pageB/:myParentText",
      templateUrl : "pageB.html",
      controller: "cnotrollerB"
    })
  })
});
