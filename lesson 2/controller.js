var myApp = angular.module('myApp',[]);
myApp.controller('controller', ['$scope', function($scope) {
  $scope.data = {message: "Hello angular"};
}]);
