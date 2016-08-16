angular.module("myApp").controller("cnotrollerA", function($scope, $state) {
  $scope.click = function() {
    if ($scope.myText==undefined || $scope.myText=='')
    {alert("Write Anything You Want");}
    else
      $state.go('pageB',{myParentText:$scope.myText});
      // $state.go("b");
  };
});
