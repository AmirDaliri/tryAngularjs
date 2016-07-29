var app=angular.module("myapp",['monospaced.elastic']);
app.controller("myCtrl",function($scope){
  $scope.submitClick=function(){
    if($scope.userInfo.$invlid==true) alert('some Invlid Information');
  }
  $scope.favoriteSelected=function(position,favorites){
    angular.forEach(favorites,function(item,index){if(position!=index) item.checked=false;});
  }
});
