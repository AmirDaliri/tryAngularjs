app.controller('homeController',function($scope,postService,$state,authenticateService,$location){
  $scope.posts=postService.getPosts();
});

