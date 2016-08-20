var app=angular.module('myApp',["oc.lazyLoad",'ui.router',]);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state( '/',{
    url:'/',
    templateUrl:'/views/hiWorldPage',
    controller:'controller',
    requireAuth: false,
 	  resolve: {
      deps: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name: 'myApp',
          files: [
            "./helpers/controller.js",
			      './helpers/styleSheet.css'
          ]
        })
      }]
  }});
}]);
