var app.module("lesson3",["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/Page2");
  $stateProvider.state('Page2',{
    url: "/Page2/:myParentText",
    templateUrl : "Page2.html",
    controller: "controller2"
  })
  });
app.controller("controller2",function($scope,$stateParams){
  $scope.MyhText=$stateParams.myParentText;
  }
  });
