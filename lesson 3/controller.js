
var app=angular.module("lesson3",["ui.router"]);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/index");
	$stateProvider.state('index',{
		url: "/index",
		templateUrl : "index.html",
		controller: "controller"
	})
	.state('Page2',{
		url: "/Page2/:myParentText",
    templateUrl : "/Page2.html",
		controller : function($scope, $stateParams) {$scope.MyhText = $stateParams.myParentText;}
		})
		});
app.controller("controller",function($scope,$state){
	$scope.AddTxt=function(){
		if($scope.myText==undefined || $scope.myText=='')
			{alert("Write Anything You Want");}
		else
			$state.go('Page2',{myParentText:$scope.myText});}
			});
