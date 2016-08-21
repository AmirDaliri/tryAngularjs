var app=angular.module('myApp',['ui.bootstrap','ui.bootstrap.tpls','ui.router']);
app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state( 'Login',{
      url:'/Login',
      templateUrl:'/views/Login',
      controller:'LoginController',
      requireAuth: false
    })
    .state('home',{
      url:'/home',
      templateUrl:'/views/home',
      controller:'homeController',
      requireAuth: false
    })
    .state('Logout',{
      url:'/Logout',
      templateUrl:'/views/Logout',
      controller:'LogoutController',
      requireAuth: true
    })
    .state('post',{
      url:'/post/:id',
      templateUrl:'/views/post',
      controller:'postController',
      requireAuth: true
    });
}]);
app.run(function($rootScope,$location,authenticateService){
  $rootScope.$on('$routeChangeStart',function(event,newUrl){
    if(newUrl.requireAuth && !authenticateService.isLogged()){
      event.preventDefault();
      $location.path('Login')
     }
  });
});
angular.module('myApp').controller("LoginController",function($scope,$state,$location,authenticateService,sessionService){
   $scope.Login=function(){
    if($scope.emailModel=='geek' && $scope.passModel=='password'){
      authenticateService.Login($scope.emailModel);
      $location.path('home');
    }
   }
});
angular.module('myApp').controller("LogoutController",function($scope,$state,$location,authenticateService,sessionService){
  $scope.Logout=function(){
   authenticateService.Logout();
    $location.path('home');
  }
});
angular.module('myApp').controller("postController",function($scope,postService,$stateParams,authenticateService,$location){
  var posts=postService.getPosts();
  $scope.selectedPost={};
  for(var i=0;i<posts.length;i++)
    if(posts[i].id==$stateParams.id)
      $scope.selectedPost=posts[i];
      $scope.showCommentInsertionPart=true;
      $scope.showNoCommentInsertionPart=false;
      $scope.showCommentsPart=true;
      $scope.showNoCommentsPart=false;
      $scope.displayCommentInsertion=function(){
	       $scope.$watch(authenticateService.isLogged,function(value,oldValue){
           if((!value && oldValue) || (!value)){
             $location.path('Login');
           }
           if(value){
             if($('#insertComment').hasClass('noDisplay')){
               $('#insertComment').addClass('display');
               $('#insertComment').removeClass('noDisplay');
               $scope.showCommentInsertionPart=false;
               $scope.showNoCommentInsertionPart=true;
             }
             else{
               $('#insertComment').addClass('noDisplay');
               $('#insertComment').removeClass('display');
               $scope.showCommentInsertionPart=true;
               $scope.showNoCommentInsertionPart=false;
             }
           }
         });
       }
       $scope.displayComments=function(){
         if($('#commentsPart').hasClass('noDisplay')){
           $('#commentsPart').addClass('display');
           $('#commentsPart').removeClass('noDisplay');
           $scope.showCommentsPart=false;
           $scope.showNoCommentsPart=true;
         }
         else{
           $('#commentsPart').addClass('noDisplay');
           $('#commentsPart').removeClass('display');
           $scope.showCommentsPart=true;
           $scope.showNoCommentsPart=false;
         }
       }
    });
angular.module('myApp').factory('sessionService',function($rootScope){
  var currentUser;
  return{
    set:function(user){return currentUser=user;},
    get:function(){return currentUser;},
    destroy:function(){return currentUser=null;}
  };
});
angular.module('myApp').factory('authenticateService',function($rootScope,sessionService,$location){
  return{
    Login:function(user){
      sessionService.set(user);
    },
    Logout:function(){
      sessionService.destroy();
    },
    isLogged:function(){
      if(sessionService.get())
        return true;
      else
        return false;
    }
  }
 });
